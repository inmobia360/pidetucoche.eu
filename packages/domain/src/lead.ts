export type LeadInput = {
  vehicle: string;
  budget: string;
  fuel: string;
  name: string;
  email: string;
  phone: string;
  province: string;
  detail: string;
  serviceConsent: boolean;
  marketingConsent: boolean;
};

export type LeadValidation =
  | { valid: true; value: LeadInput }
  | { valid: false; issues: string[] };

function text(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateLead(input: unknown): LeadValidation {
  if (typeof input !== "object" || input === null) {
    return { valid: false, issues: ["El cuerpo de la solicitud no es válido."] };
  }

  const candidate = input as Partial<LeadInput>;
  const issues: string[] = [];
  const required: Array<keyof Pick<LeadInput, "vehicle" | "budget" | "fuel" | "name" | "email" | "phone" | "province">> = [
    "vehicle", "budget", "fuel", "name", "email", "phone", "province",
  ];

  for (const field of required) {
    if (!text(candidate[field])) issues.push(`Falta el campo ${field}.`);
  }

  if (text(candidate.email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate.email.trim())) {
    issues.push("El email no tiene un formato válido.");
  }
  if (text(candidate.phone) && !/^[+\d][\d\s().-]{7,18}$/.test(candidate.phone.trim())) {
    issues.push("El teléfono no tiene un formato válido.");
  }
  if (candidate.name && candidate.name.trim().length > 120) issues.push("El nombre es demasiado largo.");
  if (candidate.detail && candidate.detail.trim().length > 1000) issues.push("El detalle es demasiado largo.");
  if (candidate.serviceConsent !== true) issues.push("Es necesario aceptar el consentimiento de servicio.");
  if (candidate.marketingConsent !== undefined && typeof candidate.marketingConsent !== "boolean") {
    issues.push("El consentimiento comercial no es válido.");
  }

  if (issues.length > 0) return { valid: false, issues };
  return {
    valid: true,
    value: {
      vehicle: candidate.vehicle!.trim(),
      budget: candidate.budget!.trim(),
      fuel: candidate.fuel!.trim(),
      name: candidate.name!.trim(),
      email: candidate.email!.trim().toLowerCase(),
      phone: candidate.phone!.trim(),
      province: candidate.province!.trim(),
      detail: candidate.detail?.trim() ?? "",
      serviceConsent: true,
      marketingConsent: candidate.marketingConsent ?? false,
    },
  };
}
