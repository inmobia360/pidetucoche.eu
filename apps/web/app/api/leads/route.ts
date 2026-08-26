import { validateLead } from "@pidetucoche/domain";
import { createPostgresLeadRepository } from "@pidetucoche/db";
import { NextResponse } from "next/server";

const repository = process.env.DATABASE_URL ? createPostgresLeadRepository(process.env.DATABASE_URL) : null;

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

  if (process.env.LEAD_STORAGE_ENABLED !== "true" || !repository) {
    return NextResponse.json(
      { code: "LEAD_STORAGE_NOT_CONFIGURED", message: "El lead es válido, pero el almacenamiento todavía no está configurado." },
      { status: 503 },
    );
  }

  try {
    const stored = await repository.create(validation.value);
    return NextResponse.json({ code: "LEAD_CREATED", id: stored.id, status: stored.status }, { status: 201 });
  } catch {
    return NextResponse.json({ code: "LEAD_STORAGE_UNAVAILABLE" }, { status: 503 });
  }
}
