/*  brute force solution O(n^2)
function stockOptimizer(a) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] - a[i] > max)
                max = a[j] - a[i];
        }
    }

    return max;
}
*/

// optimized solution
function stockOptimizer(a) {
    if (a.length <= 1)
        return 0;
    let tmpMax = a[a.length - 1];
    let profit = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        const tmp = a[i];
        if (tmp > tmpMax)
            tmpMax = tmp;

        const newProfit = tmpMax - tmp;
        if(newProfit > profit)
            profit = newProfit;
    }
    return profit;
}
console.log(stockOptimizer([10, 7, 6, 2, 9, 4]));