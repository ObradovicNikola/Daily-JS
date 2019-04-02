function floodFill(m, i, j, val) {
    if (m[i][j] == val)
        return m;

    newMatrix(m, i, j, val, m[i][j]);
    return m;
}

function newMatrix(m, i, j, val, x) {
    if(m[i] && m[i][j] == x){
        m[i][j] = val;
        newMatrix(m, i-1, j, val, x);
        newMatrix(m, i+1, j, val, x);
        newMatrix(m, i, j-1, val, x);
        newMatrix(m, i, j+1, val, x);
    }
}

const input = [

    [1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 1, 0],

    [1, 0, 0, 1, 1, 0, 1],

    [1, 2, 1, 2, 1, 2, 0],

    [1, 2, 1, 2, 2, 2, 0],

    [1, 2, 2, 2, 1, 2, 0],

    [1, 1, 1, 1, 1, 2, 1]

]

console.log(floodFill(input, 0, 0, 3));