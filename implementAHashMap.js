class Hashmap {
    constructor() {
        this._data = [];
    }

    hashStr(str) {
        let finalHash = 0;
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            finalHash += charCode;
        }
        return finalHash;
    }

    set(key, val) {
        let p = this.hashStr(key);

        if (!this._data[p]) {
            this._data[p] = [];
        }
        this._data[p].push([key, val]);
    }

    get(key) {
        let p = this.hashStr(key);

        if (!this._data[p])
            return undefined;

        for (let keyVal of this._data[p]) {
            if (keyVal[0] === key) {
                return keyVal[1];
            }
        }
    }
}

const m = new Hashmap();
m.set('name', 'Dzoni');
m.set('lastname', 'Obrad');
console.log(m.get('lastname'));