function hasEqualSubsets(a) {
    const sum = a.reduce(function (accumulator, current) {
        return accumulator + current;
    });

    if (sum % 2 != 0) {
        return false;
    }

    return canGetSum(a, sum / 2, 0, a.length, {});
}

function canGetSum(a, x, p, n, memo) {
    if (memo[x])
        return memo[x];
    if (x == 0) {
        memo[x] = true;
    } else {
        memo[x] = false;
        for (let i = p; i < n; i++) {
            if (canGetSum(a, x - a[i], i + 1, n, memo)) {
                memo[x] = true;
                break;
            }
        }
    }
    return memo[x];
}

console.log(hasEqualSubsets([2, 4, 5, 6, 9]));