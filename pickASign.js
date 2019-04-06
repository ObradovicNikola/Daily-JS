// brute force solution
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

console.log(numSignWays([2, 1, 3, 2], 2));