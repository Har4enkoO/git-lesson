function calculate(example) {
  example = example.split(" ");

  let [leftPart, operator, rightPart] = example;

  switch (operator) {
    case "+":
      result = leftPart.length + rightPart.length;
      return ".".repeat(result);
    case "-":
      result = leftPart.length - rightPart.length;
      return ".".repeat(result);
    case "*":
      result = leftPart.length * rightPart.length;
      return ".".repeat(result);
    case "//":
      result = Math.trunc(leftPart.length / rightPart.length);
      return ".".repeat(result);
  }
}
