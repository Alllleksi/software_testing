import reduce from "../src/reduce.js";

describe("reduce", () => {
  test("reduces array with sum function and initial value", () => {
    const sum = (acc, x) => acc + x;
    expect(reduce([1, 2, 3], sum, 0)).toBe(6);
  });

  test("reduces array without initial value (uses first element)", () => {
    const sum = (acc, x) => acc + x;
    expect(reduce([1, 2, 3], sum)).toBe(6); // 1 + 2 + 3
  });

  test("works with objects (iterates values)", () => {
    const addValues = (acc, v) => acc + v;
    expect(reduce({ a: 1, b: 2, c: 3 }, addValues, 0)).toBe(6);
  });

  test("empty array with initial value returns initial", () => {
    const sum = (acc, x) => acc + x;
    expect(reduce([], sum, 10)).toBe(10);
  });

  test("callback receives accumulator, value, index/key, and collection", () => {
    const seen = [];
    reduce([10, 20], (acc, v, i, arr) => {
      seen.push([acc, v, i, arr]);
      return acc + v;
    }, 0);
    expect(seen).toHaveLength(2);
    expect(seen[0]).toEqual([0, 10, 0, [10, 20]]);
    expect(seen[1]).toEqual([10, 20, 1, [10, 20]]);
  });

  test("non-numeric reducer example: concatenation", () => {
    const concat = (acc, s) => acc + s;
    expect(reduce(["a", "b", "c"], concat, "")).toBe("abc");
  });
});
