// inject:VscodeColor

// inject:VscodeColors

/**
 * Check if a given string satisfies the criteria to be a CSS variable name.
 *
 * This is NOT compliant with the CSS specifications for custom properties,
 * so DO NOT use this in uncontrolled environments.
 */
export function isCSSVariable(str: string): boolean {
  if (typeof str !== "string") return false;
  if (str.includes(" ")) return false;
  return str.startsWith("--");
}

/**
 * Get the CSS expression using the given variableName with optional fallback variables or constants.
 *
 * @example
 * // returns "var(--custom-var)"
 * createCSSVariable("--custom-var")
 * // returns "var(--custom-var, red)"
 * createCSSVariable("--custom-var", "red")
 * // returns "var(--custom-var, var(--another-var, red))"
 * createCSSVariable("--custom-var", "--another-var", "red")
 *
 * @param variableName Any syntactically valid CSS variable name
 * @param fallbacks An array of CSS variable names or constants
 */
export function createCSSVariable(
  variableName: string,
  ...fallbacks: string[]
): string {
  // If the given variable name is not a valid CSS variable, just return it as-is.
  if (!isCSSVariable(variableName)) {
    return variableName;
  }

  // If no fallbacks are defined, then this is trivial.
  if (fallbacks === undefined || fallbacks.length === 0)
    return `var(${variableName})`;

  let firstConstantIdx = -1;
  for (let i = 0; i < fallbacks.length; ++i) {
    if (!isCSSVariable(fallbacks[i])) {
      firstConstantIdx = i;
      break;
    }
  }

  let endOfValidFallbacks: number;
  let fallbackString: string;
  if (firstConstantIdx === -1) {
    // Use the last element (a CSS variable)
    endOfValidFallbacks = fallbacks.length - 1;
    fallbackString = `var(${fallbacks[endOfValidFallbacks]})`;
  } else {
    // Use the first constant
    endOfValidFallbacks = firstConstantIdx;
    fallbackString = "" + fallbacks[endOfValidFallbacks];
  }

  for (let i = endOfValidFallbacks - 1; i >= 0; --i) {
    // Every element we encounter will be a valid CSS variable name
    const name = fallbacks[i];
    fallbackString = `var(${name}, ${fallbackString})`;
  }

  return `var(${variableName}, ${fallbackString})`;
}
