export function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "";
    }
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    if (typeof str !== "string" || str.length == 0) {
        return "";
    }
    return str.split("").reverse("").join("");
}