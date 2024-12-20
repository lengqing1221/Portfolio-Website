import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// pages/api/sendEmail.js
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const url = "https://email.api.engagelab.cc/v1/mail/send";
  const { from, to, content } = req.body;

  const requestBody = {
    from: [from],
    to: [to],
    body: {
      content: content,
    },
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${process.env.API_USER}:${process.env.API_KEY}`
        ).toString('base64')}`,
      },
    });

    // Axios automatically parses JSON responses
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
