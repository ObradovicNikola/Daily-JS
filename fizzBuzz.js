function checkFizzBuzz(x) {
    let result = '';
    if (x % 3 == 0) result += 'fizz';
    if (x % 5 == 0) result += 'buzz';
    if (result === '') result = x;
    console.log(result);
}

for(let i = 1; i < 100; i++)
    checkFizzBuzz(i);