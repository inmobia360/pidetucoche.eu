const EURO_SCALE = 100n;

export class Money {
  private constructor(private readonly cents: bigint) {}

  static zero(): Money {
    return new Money(0n);
  }

  static fromCents(cents: bigint): Money {
    return new Money(cents);
  }

  static fromEuros(value: string): Money {
    if (!/^-?\d+(?:\.\d{1,2})?$/.test(value)) {
      throw new Error(`Invalid EUR amount: ${value}`);
    }

    const negative = value.startsWith("-");
    const unsigned = negative ? value.slice(1) : value;
    const [whole = "0", fraction = ""] = unsigned.split(".");
    const normalizedFraction = fraction.padEnd(2, "0");
    const cents = BigInt(whole) * EURO_SCALE + BigInt(normalizedFraction);

    return new Money(negative ? -cents : cents);
  }

  add(other: Money): Money {
    return new Money(this.cents + other.cents);
  }

  subtract(other: Money): Money {
    return new Money(this.cents - other.cents);
  }

  isAtLeast(other: Money): boolean {
    return this.cents >= other.cents;
  }

  isNegative(): boolean {
    return this.cents < 0n;
  }

  toCents(): bigint {
    return this.cents;
  }

  toEuros(): string {
    const negative = this.cents < 0n;
    const absolute = negative ? -this.cents : this.cents;
    const whole = absolute / EURO_SCALE;
    const fraction = (absolute % EURO_SCALE).toString().padStart(2, "0");

    return `${negative ? "-" : ""}${whole}.${fraction}`;
  }

  equals(other: Money): boolean {
    return this.cents === other.cents;
  }
}

export function sumMoney(values: readonly Money[]): Money {
  return values.reduce((total, value) => total.add(value), Money.zero());
}

