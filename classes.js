class Car {
    constructor({
        title
    }) {
        this.title = title;
    }
    drive() {
        return 'broom';
    }
}

class Mazda extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    honk() {
        return 'beep';
    }
}

const mazda = new Mazda({
    color: 'black',
    title: 'Fast and furious'
});

console.log(mazda.honk());
console.log(mazda.color);