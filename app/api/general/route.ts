import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dsFDTdCM_Ku95A2TtEwHs49YvwLg2Ma5G");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, email, subject, message } = body;

    const htmlContent = `
      <h2>New General Enquiry from ${name}</h2>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Email:</strong> ${email}</p>
      <br/>
      <h3>Message:</h3>
      <p>${message}</p>
    `;

    const data = await resend.emails.send({
      from: "Avorria Trades <hello@avorria.com>",
      to: ["hello@avorria.com"],
      subject: `Enquiry: ${subject} (${name})`,
      html: htmlContent,
      replyTo: email,
    });

    console.log("[Avorria Trades] General enquiry sent:", data);
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("[Avorria Trades] General API error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
