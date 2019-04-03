/* brute force solution O(n^2)
function findSumZeroSubsets(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        if (sum == 0)
            console.log("From " + i + " to " + i);
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum == 0)
                console.log("From " + i + " to " + j);
        }
    }
}
*/

// using dynamic programming to store data (in hash)
// time complexity for this solution is O(n)
function findSumZeroSubsets(arr) {
    let hash = {};
    let currSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if (currSum == 0) {
            console.log('From 0 to ' + i);
        }
        if (hash.hasOwnProperty(currSum)) {
            console.log('From ' + (hash[currSum] + 1) + ' to ' + i);
        }
        hash[currSum] = i;
    }
}

let arr = [3, 5, -2, -4, 7, -1, 4, 7, -4, 4]

findSumZeroSubsets(arr);