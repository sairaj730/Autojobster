import { fetch } from 'undici';

export async function fetchJobs({ title = '', location = '', limit = 10, offset = 0 } = {}) {
  const params = [];
  if (title) params.push(`title=${encodeURIComponent(title)}`);
  if (location) params.push(`location=${encodeURIComponent(location)}`);
  params.push(`limit=${limit}`);
  params.push(`offset=${offset}`);
  const queryString = params.length ? `?${params.join('&')}` : '';

  const url = `https://api.theirstack.com/api/jobs${queryString}`;
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2YWRhc2FpcmFqdTEyM0BnbWFpbC5jb20iLCJwZXJtaXNzaW9ucyI6InVzZXIiLCJjcmVhdGVkX2F0IjoiMjAyNS0wOC0wOVQwOTo1MzoyMy42ODA0MTErMDA6MDAifQ.Ln5d7k7Ri6Xm9yRdmaI_RGw5__VYKc4-EiFtptpc_BI';

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(`TheirStack API error: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}
