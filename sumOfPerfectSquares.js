function howManySquares(n) {
    return helper(n, {});
}

function helper(n, hash) {
    if (hash.hasOwnProperty(n))
        return hash[n];
    if (n <= 3)
        return n;
    res = n;
    for (let i = 2; i < n + 1; i++) {
        tmp = i * i;
        if (tmp > n) {
            break;
        } else {
            res = Math.min(res, 1 + helper(n - tmp, hash));
        }
    }
    hash[n] = res;
    return res;
}

console.log(howManySquares(21));