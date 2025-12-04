import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
  test("converts numeric string", () => {
    expect(toNumber("42")).toBe(42);
  });

  test("converts booleans", () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test("handles null/undefined", () => {
    expect(Number.isNaN(toNumber(null))).toBe(true);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });

  test("hex and scientific notation if supported", () => {
    expect(toNumber("0x10")).toBe(16);
    expect(toNumber("1e3")).toBe(1000);
  });

  test("non-convertible returns NaN", () => {
    expect(Number.isNaN(toNumber("abc"))).toBe(true);
    expect(Number.isNaN(toNumber({}))).toBe(true);
  });
});
