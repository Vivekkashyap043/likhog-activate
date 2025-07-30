import fetch from 'node-fetch';

export default async ({ req, res }) => {
  const url = 'https://likhog-server.onrender.com/user-api/articles'; // 🔁 replace with your actual endpoint
  try {
    const response = await fetch(url);
    const text = await response.text();
    return res.send(`Success: ${response.status} - ${text}`);
  } catch (err) {
    return res.send(`Error: ${err.message}`);
  }
};
