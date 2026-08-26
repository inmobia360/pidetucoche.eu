import { describe, expect, it } from "vitest";

import { Money } from "../src/money.js";

describe("Money", () => {
  it("parses and formats EUR without floating point", () => {
    const amount = Money.fromEuros("1234.56");

    expect(amount.toCents()).toBe(123456n);
    expect(amount.toEuros()).toBe("1234.56");
  });

  it("rejects amounts with more than two decimals", () => {
    expect(() => Money.fromEuros("10.001")).toThrow("Invalid EUR amount");
  });
});

