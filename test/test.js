const {
  createCSSVariable,
  isCSSVariable,
} = require("../dist/index");

const Colors = {
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  RED: "\x1b[31m",
  RESET: "\x1b[0m",
  BOLD: "\x1b[1m",
};

/**
 * @param {any} actual
 * @param {any} expected
 * @param {string} testName
 */
function test(actual, expected) {
  if (actual === expected) {
    // Test passed
    console.log(Colors.GREEN, "✅ Test passed", Colors.RESET);
  } else {
    // Test failed
    console.log(Colors.RED, `❌ Test failed`, Colors.RESET);
    console.log(
      Colors.RED,
      `Expected: '${expected}' / Actual: '${actual}'`,
      Colors.RESET
    );
  }
}

test(createCSSVariable("red"), "red");
test(createCSSVariable("--var-1"), "var(--var-1)");
test(createCSSVariable("--var-1", "red"), "var(--var-1, red)");
test(createCSSVariable("--var-1", "--var-2"), "var(--var-1, var(--var-2))");
test(
  createCSSVariable("--var-1", "--var-2", "red"),
  "var(--var-1, var(--var-2, red))"
);
test(
  createCSSVariable("--var-1", "red", "--var-2"),
  "var(--var-1, red)"
);
test(
  createCSSVariable("--var-1", undefined, "red", "--var-2"),
  "var(--var-1, undefined)"
);

test(isCSSVariable(""), false);
test(isCSSVariable("--valid-variable"), true);
test(isCSSVariable("invalid"), false);
test(isCSSVariable("-invalid variable"), false);
test(isCSSVariable("--invalid variable"), false);
test(isCSSVariable("--unicode-Ψ"), true);
test(isCSSVariable("--emoji-🥶"), true);
