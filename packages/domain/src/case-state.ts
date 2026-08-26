export const CASE_STATES = [
  "LEAD",
  "QUALIFIED",
  "SEARCHING",
  "CANDIDATE_APPROVED",
  "RESERVED",
  "BIDDING",
  "WON",
  "IN_TRANSIT",
  "RECEIVED",
  "INSPECTION",
  "PREPARATION",
  "READY",
  "DELIVERED",
  "CLOSED",
  "REJECTED",
  "EXPIRED",
  "LOST",
  "REFUNDED",
  "CANCELLED",
] as const;

export type CaseState = (typeof CASE_STATES)[number];

const allowedTransitions: Readonly<Record<CaseState, readonly CaseState[]>> = {
  LEAD: ["QUALIFIED", "REJECTED", "CANCELLED"],
  QUALIFIED: ["SEARCHING", "REJECTED", "CANCELLED"],
  SEARCHING: ["CANDIDATE_APPROVED", "EXPIRED", "REFUNDED", "CANCELLED"],
  CANDIDATE_APPROVED: ["RESERVED", "EXPIRED", "CANCELLED"],
  RESERVED: ["BIDDING", "REFUNDED", "CANCELLED"],
  BIDDING: ["WON", "LOST", "CANCELLED"],
  WON: ["IN_TRANSIT", "CANCELLED"],
  IN_TRANSIT: ["RECEIVED", "CANCELLED"],
  RECEIVED: ["INSPECTION", "CANCELLED"],
  INSPECTION: ["PREPARATION", "CANCELLED"],
  PREPARATION: ["READY", "CANCELLED"],
  READY: ["DELIVERED", "CANCELLED"],
  DELIVERED: ["CLOSED"],
  CLOSED: [],
  REJECTED: [],
  EXPIRED: [],
  LOST: ["SEARCHING", "REFUNDED", "CANCELLED"],
  REFUNDED: [],
  CANCELLED: [],
};

export function canTransition(from: CaseState, to: CaseState): boolean {
  return allowedTransitions[from].includes(to);
}

export function assertTransition(from: CaseState, to: CaseState): void {
  if (!canTransition(from, to)) {
    throw new Error(`Invalid case transition: ${from} -> ${to}`);
  }
}

