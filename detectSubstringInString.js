let str = 'command';
let subStr = 'man';

function detectSubstring(str, subStr) {
    let i = 0,
        j = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == subStr[j]) {
            j++;
        } else {
            i -= j;
            j = 0;
        }
        if (j == subStr.length)
            return i - subStr.length + 1;
    }
    return -1;
}

console.log(detectSubstring(str, subStr));