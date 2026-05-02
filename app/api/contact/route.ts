import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[Avorria Trades] New enquiry:", JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[Avorria Trades] Contact API error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
