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

export const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a -b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a , b) {
        if(b === 0) {
            return NaN;
        }
        return a / b;
    }
}

function shiftChar(char, shift) {
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (!isUpper && !isLower) return char;

  const charCode = char.charCodeAt(0);
  const base = isUpper ? 65 : 97;

  const shifted = ((charCode - base + shift) % 26 + 26) % 26; 
  return String.fromCharCode(base + shifted);
}

export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    };
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = sum / arr.length;

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}
