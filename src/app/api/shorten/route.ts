import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { url } = await req.json();

  const response = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ url }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failder to shorten URL" },
      { status: 500 },
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
