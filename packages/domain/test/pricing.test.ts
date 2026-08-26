import { describe, expect, it } from "vitest";

import {
  calculateMaximumBid,
  evaluatePurchase,
  Money,
  type PurchaseCostBreakdown,
} from "../src/index.js";

function costs(purchasePrice: string): PurchaseCostBreakdown {
  return {
    purchasePrice: Money.fromEuros(purchasePrice),
    sourceFee: Money.fromEuros("450.00"),
    transport: Money.fromEuros("500.00"),
    transportContingency: Money.fromEuros("50.00"),
    documentation: Money.fromEuros("200.00"),
    inspection: Money.fromEuros("150.00"),
    standardPreparation: Money.fromEuros("300.00"),
    extraordinaryRepairs: Money.zero(),
    commercialWarranty: Money.fromEuros("350.00"),
    paymentAndFinance: Money.fromEuros("100.00"),
    acquisitionCost: Money.fromEuros("400.00"),
    nonRecoverableTaxes: Money.zero(),
    riskProvision: Money.fromEuros("600.00"),
  };
}

describe("pricing", () => {
  it("allows a purchase at the exact 1,000 EUR contribution floor", () => {
    const result = evaluatePurchase(Money.fromEuros("18600.00"), costs("14500.00"));

    expect(result.contribution.toEuros()).toBe("1000.00");
    expect(result.eligibleForPurchase).toBe(true);
  });

  it("blocks a purchase below the approved contribution floor", () => {
    const result = evaluatePurchase(Money.fromEuros("18599.99"), costs("14500.00"));

    expect(result.contribution.toEuros()).toBe("999.99");
    expect(result.eligibleForPurchase).toBe(false);
  });

  it("calculates a deterministic maximum bid", () => {
    const { purchasePrice: _, ...otherCosts } = costs("0.00");
    const maximumBid = calculateMaximumBid(Money.fromEuros("18600.00"), otherCosts);

    expect(maximumBid.toEuros()).toBe("14500.00");
  });
});

