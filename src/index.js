module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketPairs = Object.fromEntries(bracketsConfig);
  
  for (const char of str) {
    if (stack.length && char === stack[stack.length - 1] && bracketPairs[char] === char) {
      stack.pop();
    } else if (bracketPairs[char]) {
      stack.push(char);
    } else if (bracketPairs[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
}