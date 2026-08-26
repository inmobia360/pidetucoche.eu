import { Money, sumMoney } from "./money.js";

export const MINIMUM_CONTRIBUTION = Money.fromEuros("1000.00");

export interface PurchaseCostBreakdown {
  readonly purchasePrice: Money;
  readonly sourceFee: Money;
  readonly transport: Money;
  readonly transportContingency: Money;
  readonly documentation: Money;
  readonly inspection: Money;
  readonly standardPreparation: Money;
  readonly extraordinaryRepairs: Money;
  readonly commercialWarranty: Money;
  readonly paymentAndFinance: Money;
  readonly acquisitionCost: Money;
  readonly nonRecoverableTaxes: Money;
  readonly riskProvision: Money;
}

export interface PricingEvaluation {
  readonly authorizedPrice: Money;
  readonly totalVariableCost: Money;
  readonly contribution: Money;
  readonly minimumContribution: Money;
  readonly eligibleForPurchase: boolean;
}

export function evaluatePurchase(
  authorizedPrice: Money,
  costs: PurchaseCostBreakdown,
  minimumContribution: Money = MINIMUM_CONTRIBUTION,
): PricingEvaluation {
  const totalVariableCost = sumMoney(Object.values(costs));
  const contribution = authorizedPrice.subtract(totalVariableCost);

  return {
    authorizedPrice,
    totalVariableCost,
    contribution,
    minimumContribution,
    eligibleForPurchase: contribution.isAtLeast(minimumContribution),
  };
}

export function calculateMaximumBid(
  authorizedPrice: Money,
  costsExcludingPurchase: Omit<PurchaseCostBreakdown, "purchasePrice">,
  minimumContribution: Money = MINIMUM_CONTRIBUTION,
): Money {
  const nonPurchaseCosts = sumMoney(Object.values(costsExcludingPurchase));
  return authorizedPrice.subtract(nonPurchaseCosts).subtract(minimumContribution);
}

