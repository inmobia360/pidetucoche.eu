CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'CONTACTED', 'QUALIFIED', 'REJECTED')),
  vehicle TEXT NOT NULL,
  budget TEXT NOT NULL,
  fuel TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  province TEXT NOT NULL,
  detail TEXT NOT NULL DEFAULT '',
  service_consent_at TIMESTAMPTZ NOT NULL,
  marketing_consent BOOLEAN NOT NULL DEFAULT FALSE,
  source TEXT NOT NULL DEFAULT 'web',
  deleted_at TIMESTAMPTZ NULL
);

CREATE INDEX IF NOT EXISTS leads_status_created_at_idx ON leads (status, created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);
