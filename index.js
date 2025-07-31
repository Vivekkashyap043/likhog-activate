import fetch from 'node-fetch';

export default async ({ req, res }) => {
  const urls = [
    'https://likhog-server.onrender.com/user-api/articles', // backend endpoint
    'https://likhog.onrender.com/' // frontend URL
  ];

  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        const text = await response.text();
        return `✅ ${url} → ${response.status}: ${text}`;
      })
    );

    return res.send(results.join('\n'));
  } catch (err) {
    return res.send(`❌ Error: ${err.message}`);
  }
};
