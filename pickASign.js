/* brute force solution
function numSignWays(arr, sum) {
    return findWays(arr, sum, 0, 0)
}

function findWays(arr, sum, p, currSum) {
    if (p < arr.length) {
        return findWays(arr, sum, p + 1, currSum + arr[p]) +
            findWays(arr, sum, p + 1, currSum - arr[p]);
    }
    if (currSum == sum)
        return 1;
    return 0;
}
*/
// optimization with dynamic programming
function numSignWays(arr, sum) {
    return findWays(arr, sum, 0, 0, {})
}

function findWays(arr, sum, p, currSum, hash) {
    const key = p - currSum;
    if(hash.hasOwnProperty(key))
        return hash[key];
    if (p < arr.length) {
        const positive = findWays(arr, sum, p + 1, currSum + arr[p], hash);
        const negative = findWays(arr, sum, p + 1, currSum - arr[p], hash);
        const totalMatches = positive + negative;
        hash[key] = totalMatches;
        return totalMatches;
    }
    if (currSum == sum)
        return 1;
    return 0;
}

console.log(numSignWays([1, 1, 1], 3));
console.log(numSignWays([2, 1, 3, 2], 2));