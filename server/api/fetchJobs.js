import { fetch } from 'undici';


export async function fetchJobs({ title = '', location = '', size = 50 } = {}) {
  const url = 'https://api.apijobs.dev/v1/job/search';

  const queryParts = [];
  if (title) {
    queryParts.push(title);
  }
  if (location) {
    queryParts.push(`in ${location}`);
  }
  let q = queryParts.join(' ');

  // If the query is empty, default to a general search to get some results.
  if (!q.trim()) {
    q = 'developer';
  }

  const body = { q, size };

  const apiKey = process.env.APIJOBS_DEV_API_KEY;
  if (!apiKey) {
    throw new Error('Server configuration error: APIJOBS_DEV_API_KEY is not defined.');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`APIJobs.dev API error: ${response.status} ${response.statusText} - ${errorBody}`);
  }
  return response.json();
}
