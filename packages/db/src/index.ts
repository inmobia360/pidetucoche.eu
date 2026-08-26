import { randomUUID } from "node:crypto";
import { Pool } from "pg";
import type { LeadInput } from "@pidetucoche/domain";

export type StoredLead = {
  id: string;
  createdAt: string;
  status: "NEW";
};

export type LeadRepository = {
  create(input: LeadInput): Promise<StoredLead>;
};

export function createPostgresLeadRepository(databaseUrl: string): LeadRepository {
  const pool = new Pool({ connectionString: databaseUrl, max: 5 });

  return {
    async create(input) {
      const id = randomUUID();
      const result = await pool.query<{ created_at: Date }>(
        `INSERT INTO leads (
          id, vehicle, budget, fuel, name, email, phone, province, detail,
          service_consent_at, marketing_consent, source
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), $10, $11)
        RETURNING created_at`,
        [id, input.vehicle, input.budget, input.fuel, input.name, input.email, input.phone, input.province, input.detail, input.marketingConsent, "web"],
      );
      const createdAt = result.rows[0]?.created_at;
      if (!createdAt) throw new Error("Lead insert did not return its creation date");
      return { id, createdAt: createdAt.toISOString(), status: "NEW" };
    },
  };
}
