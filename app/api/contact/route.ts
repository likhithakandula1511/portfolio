import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const { name, email, message } = data as Record<string, unknown>;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    name.length <= 200 &&
    typeof email === "string" &&
    EMAIL_REGEX.test(email) &&
    typeof message === "string" &&
    message.trim().length > 0 &&
    message.length <= 5000
  );
}

/**
 * Contact form submission endpoint.
 *
 * This is a stub: it validates input and returns success without sending
 * an email. To go live, connect a provider (Resend, SendGrid, Postmark,
 * etc.) here using an API key stored in an environment variable
 * (e.g. process.env.RESEND_API_KEY) — never hardcode credentials, and
 * never expose them to the client.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 }
    );
  }

  // TODO: send the message using your email/contact service of choice.
  // Example (pseudocode):
  // await resend.emails.send({
  //   from: "portfolio@yourdomain.com",
  //   to: process.env.CONTACT_RECEIVER_EMAIL,
  //   subject: `New portfolio message from ${body.name}`,
  //   text: body.message,
  // });

  return NextResponse.json({ success: true }, { status: 200 });
}
