import { AwsClient } from 'aws4fetch';

const aws = new AwsClient({
  accessKeyId: import.meta.env.VITE_BACKBLAZE_KEY_ID || import.meta.env.BACKBLAZE_KEY_ID || '005683eb57bbbfd0000000001',
  secretAccessKey: import.meta.env.VITE_BACKBLAZE_APP_KEY || import.meta.env.BACKBLAZE_APP_KEY || 'K005iM2QhB29rWWGdDn317kZQh69GiQ',
  service: "s3",
  region: "us-east-005"
});

export const getSignedUrl = async (url: string) => {
  if (!url) return null;
  const signedReq = await aws.sign(url, {
    method: 'GET',
    aws: { signQuery: true }
  });
  
  // Rewrite the URL to use our Vercel proxy to bypass CORS
  const parsed = new URL(signedReq.url);
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  return `${baseUrl}/api/b2${parsed.pathname}${parsed.search}`;
};

export const uploadToB2Client = async (fileBase64: string, contentType: string, fileName: string) => {
  if (!fileBase64) return null;
  
  const bucket = import.meta.env.VITE_BACKBLAZE_BUCKET || import.meta.env.BACKBLAZE_BUCKET || 'coopmaza-docs';
  const endpoint = import.meta.env.VITE_BACKBLAZE_ENDPOINT || import.meta.env.BACKBLAZE_ENDPOINT || 's3.us-east-005.backblazeb2.com'; 
  
  const key = `solicitudes/${crypto.randomUUID()}-${fileName}`;
  const targetUrl = `https://${bucket}.${endpoint}/${key}`;

  const base64Data = fileBase64.includes(',') ? fileBase64.split(',')[1] : fileBase64;
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const signedReq = await aws.sign(targetUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: bytes,
  });

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const uploadUrl = `${baseUrl}/api/b2/${key}`;

  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: signedReq.headers,
    body: bytes,
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Error subiendo archivo a Backblaze (${res.status}): ${errText}`);
  }
  return targetUrl;
};
