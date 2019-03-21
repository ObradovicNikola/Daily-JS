function hasEqualSubsets(a) {
    const sum = a.reduce(function (accumulator, current) {
        return accumulator + current;
    });

    if (sum % 2 != 0) {
        return false;
    }

    return canGetSum(a, sum / 2, 0, a.length);
}

function canGetSum(a, x, p, n) {
    if (x == 0) {
        return true;
    } else {
        for (let i = p; i < n; i++) {
            if (canGetSum(a, x - a[i], i + 1, n)) {
                return true;
            }
        }
    }
    return false;
}

const set = [5, 7, 19, 7]

console.log(hasEqualSubsets(set));