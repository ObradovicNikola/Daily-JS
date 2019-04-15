function operate(s) {
    let pos = s.lastIndexOf("$");
    if (pos == -1) return s;
    else return s.slice(pos + 1);
}

function dollarDelete(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = operate(arr[i]);
    }
}

function isDollarDeleteEqual(arr) {
    dollarDelete(arr);
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1])
            return false;
    }
    return true;
}

const input = ["f$st", "st", "$st"];

console.log(isDollarDeleteEqual(input));