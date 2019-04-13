// simple implementation of DFS algorithm
// to find most connected ones
function MostConnectedOnes(matrix) {
    let max = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const currConnected = findCurrConnected(matrix, i, j);
            if (currConnected > max)
                max = currConnected;
        }
    }
    return max;
}

function findCurrConnected(matrix, x, y) {
    if (!matrix[x]) return 0;
    if (matrix[x][y] != 1)
        return 0;
    matrix[x][y] = -1;
    return 1 + findCurrConnected(matrix, x + 1, y) + findCurrConnected(matrix, x - 1, y) +
        findCurrConnected(matrix, x, y - 1) + findCurrConnected(matrix, x, y + 1);
}

const matrix = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0]
  ];
console.log(MostConnectedOnes(matrix));