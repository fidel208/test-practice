import { reverseString } from "./script.js";

test ("reverses a word", () => {
    expect(reverseString("fidel")).toBe("ledif");
})