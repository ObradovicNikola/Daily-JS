function twoSum(arr, goal) {
    arr.sort();
    let a = 0,
        b = arr.length - 1;
    if (a == b)
        console.log("Error");
    else {
        while (a < b) {
            if (arr[a] + arr[b] == goal) {
                console.log(a, b);
                break;
            }
        }
    }
}

let arr = [1, 3, 6, 7, 9];
let goal = 10;
twoSum(arr, goal);