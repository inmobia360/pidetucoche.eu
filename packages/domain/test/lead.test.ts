import { describe, expect, it } from "vitest";
import { validateLead } from "../src/lead.js";

const validLead = {
  vehicle: "SUV",
  budget: "15.000 – 25.000 €",
  fuel: "Híbrido",
  name: "Persona de prueba",
  email: "demo@example.com",
  phone: "+34 600 000 000",
  province: "Ourense",
  detail: "Uso familiar",
  serviceConsent: true,
  marketingConsent: false,
};

describe("lead validation", () => {
  it("normalizes a valid lead without persisting personal data", () => {
    const result = validateLead({ ...validLead, email: " DEMO@EXAMPLE.COM " });
    expect(result).toEqual({ valid: true, value: { ...validLead, email: "demo@example.com" } });
  });

  it("requires service consent and rejects invalid contact data", () => {
    const result = validateLead({ ...validLead, email: "not-an-email", serviceConsent: false });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.issues).toEqual(expect.arrayContaining([
      "El email no tiene un formato válido.",
      "Es necesario aceptar el consentimiento de servicio.",
    ]));
  });
});
