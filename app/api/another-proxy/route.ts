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
        name: body.fullName,
        email: body.email,
        phone: body.phone,
        companyName: body.companyName,
        
        customField: [
          { id: "GGhCZUrGGn7UrazimDiE", value: "4bb9b077-4278-4108-88d0-9d4d6ccac415" },
          { id: "JS3jFDAl0NuNgYX1yfa1", value: body.selected },
          { id: "DCZoXZsaYoN8WksVYATL", value: body.region },
          {
            id: "1NXSDpjhasPQjmHXNbkk",
            value: body.additionalInfo,
          },
          {
            id: "GpXS1q6vW41xmvKFxofT",
            value: body.wantsSample ? "Yes" : "No",
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
