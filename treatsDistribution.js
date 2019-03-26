function treatsDistribution(a) {
    let kindsOfSnacks = [1000];
    for (let i = 0; i < 1000; i++)
        kindsOfSnacks[i] = 0;

    for (let i = 0; i < a.length; i++)
        kindsOfSnacks[a[i]]++;

    let kinds = 0,
        canPair = true;
    for (let i = 0; i < 1000; i++) {
        if (kindsOfSnacks[i] >= 2) {
            kinds++;
            kindsOfSnacks[i] = kindsOfSnacks[i] % 2;
        }
        if (kindsOfSnacks[i] == 1) {
            if (canPair) {
                kinds++;
                canPair = false;
            } else canPair = true;
        }
    }

    return kinds;
}

console.log(treatsDistribution([2,2,3,5,4,5]));