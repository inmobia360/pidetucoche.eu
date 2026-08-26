import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { code: "ADMIN_AUTH_REQUIRED", message: "El backoffice requiere OIDC con MFA antes de consultar leads." },
    { status: 401, headers: { "Cache-Control": "no-store" } },
  );
}
