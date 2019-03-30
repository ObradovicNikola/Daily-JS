function swap(a, p, i) {
    let tmp = a[p];
    a[p] = a[i];
    a[i] = tmp;
}

function printStringPerm(a, s) {
    for (let i = 0; i < a.length; i++) {
        process.stdout.write(s[a[i]] + " ");
    }
    console.log();
}

//swaping element on position p with each element after p
//and generating new permutation of elements after p
function generateAllPerm(a, p, s) {
    if (p == a.length)
        printStringPerm(a, s);
    else {
        for (let i = p; i < a.length; i++) {
            swap(a, p, i);
            generateAllPerm(a, p + 1, s);
            swap(a, i, p);
        }
    }
}

function generateStringPerm(s) {
    let n = s.length,
        a = [];

    for (let i = 0; i < n; i++)
        a[i] = i;
    generateAllPerm(a, 0, s);
}

generateStringPerm('abc');