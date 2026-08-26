import { validateLead } from "@pidetucoche/domain";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ code: "INVALID_JSON" }, { status: 400 });
  }

  const validation = validateLead(body);
  if (!validation.valid) {
    return NextResponse.json({ code: "INVALID_LEAD", issues: validation.issues }, { status: 400 });
  }

  if (process.env.LEAD_STORAGE_ENABLED !== "true") {
    return NextResponse.json(
      { code: "LEAD_STORAGE_NOT_CONFIGURED", message: "El lead es válido, pero el almacenamiento todavía no está configurado." },
      { status: 503 },
    );
  }

  return NextResponse.json({ code: "LEAD_STORAGE_ADAPTER_PENDING" }, { status: 501 });
}
