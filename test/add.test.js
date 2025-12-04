import add from "../src/add.js";

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negatives", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("handles zeros", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  test("coerces numeric strings where applicable", () => {
    expect(add("2", 3)).toBe(5);
    expect(add(2, "3")).toBe(5);
  });

  test("NaN when non-numeric input", () => {
    expect(Number.isNaN(add("a", 1))).toBe(true);
    expect(Number.isNaN(add({}, 1))).toBe(true);
  });
});