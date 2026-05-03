import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dsFDTdCM_Ku95A2TtEwHs49YvwLg2Ma5G");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      trade, name, businessName, location, coverageAreas, 
      hasWebsite, currentWebsite, package: pkg, referral, 
      email, phone, bestTime, notes
    } = body;

    const htmlContent = `
      <h2>New Website Enquiry from ${name}</h2>
      <p><strong>Trade:</strong> ${trade}</p>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Coverage Areas:</strong> ${coverageAreas}</p>
      <p><strong>Has Website?:</strong> ${hasWebsite} ${hasWebsite === 'Yes' ? `(${currentWebsite})` : ''}</p>
      <p><strong>Package Interested In:</strong> ${pkg}</p>
      <p><strong>Referral Source:</strong> ${referral}</p>
      <br/>
      <h3>Contact Details</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Best Time to Call:</strong> ${bestTime}</p>
      <p><strong>Additional Notes:</strong> ${notes || "None provided"}</p>
    `;

    const data = await resend.emails.send({
      from: "Avorria Trades <hello@avorria.com>",
      to: ["hello@avorria.com"],
      subject: `New Lead: ${name} (${trade})`,
      html: htmlContent,
      replyTo: email,
    });

    console.log("[Avorria Trades] Resend success:", data);
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("[Avorria Trades] Contact API error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
