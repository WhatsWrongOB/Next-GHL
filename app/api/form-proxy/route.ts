import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(process.env.GHL_LINK as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SUNX_API_KEY}`,
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        customField: [
          { id: "fGdl7g8tzj3FgjU0FtJ9", value: body.businessName },
          {
            id: "ehN8tPossmzrDT6NTE2F",
            value: body.townCity,
          },
          {
            id: "3VxaJE5QRoBmFNZ3jcQL",
            value: body.firstName,
          },
          {
            id: "CMcoLcNwd8OWWNRYaQYA",
            value: body.lastName,
          },
          {
            id: "HmcC9YqMJLlrmmtRUS1M",
            value: body.message,
          },
        ],
        tags: body.selected,
        source: "Next.js Form",
        locationId: process.env.GHL_LOCATION_ID,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to send contact to GoHighLevel" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { message: "Error occurred. Try again." },
      { status: 500 }
    );
  }
}
