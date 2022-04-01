function calculate(N) {
  if (N < 0) return null;

  let matrix = [];
  for (let row = 0; row < N; row++) {
    let cells = [];
    for (let cell = 0; cell < N; cell++) {
      let letter = String.fromCharCode(97 + ((row + cell) % 26));
      cells = [...cells, letter];
    }
    matrix = [...matrix, cells.join(" ")];
  }

  return matrix.join("\n");
}
