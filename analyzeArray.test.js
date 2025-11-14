import { analyzeArray } from "./script.js";

test("returns correct analysis for a normal array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("works with negative numbers", () => {
  expect(analyzeArray([-2, -5, -1])).toEqual({
    average: -8 / 3,
    min: -5,
    max: -1,
    length: 3,
  });
});

test("returns NaN values for empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: NaN,
    max: NaN,
    length: 0,
  });
});

test("returns NaN and length 0 for non-array input", () => {
  expect(analyzeArray("not array")).toEqual({
    average: NaN,
    min: NaN,
    max: NaN,
    length: 0,
  });
});
