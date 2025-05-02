import type { VercelRequest, VercelResponse } from "@vercel/node";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await sgMail.send({
      to: "trulsaal@gmail.com",
      from: "trulsaal@gmail.com",
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${email}`,
    });

    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(
        "SendGrid Error:",
        (err as { response?: { body: string } }).response?.body || err.message
      );
    } else {
      console.error("SendGrid Error:", err);
    }
    return res.status(500).json({ error: "Email failed to send" });
  }
}
