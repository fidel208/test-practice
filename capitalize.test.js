import { capitalize } from "./script.js";

test("capitalizes the first leeter of a word", () => {
    expect(capitalize("studies")).toBe("Studies");
});