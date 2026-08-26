import { describe, expect, it } from "vitest";

import { assertTransition, canTransition } from "../src/case-state.js";

describe("case state transitions", () => {
  it("allows the controlled happy path", () => {
    expect(canTransition("RESERVED", "BIDDING")).toBe(true);
    expect(canTransition("READY", "DELIVERED")).toBe(true);
  });

  it("blocks skipping adjudication and transport", () => {
    expect(canTransition("RESERVED", "IN_TRANSIT")).toBe(false);
    expect(() => assertTransition("RESERVED", "IN_TRANSIT")).toThrow(
      "Invalid case transition",
    );
  });

  it("keeps closed cases terminal", () => {
    expect(canTransition("CLOSED", "LEAD")).toBe(false);
  });
});

