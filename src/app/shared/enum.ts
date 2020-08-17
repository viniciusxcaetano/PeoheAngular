export class Enum {

    key: string;
    value: number;

    constructor(key: string, value: number) {
        this.key = key;
        this.value = value;
    }

    static get(enumerable: any) {
        return Object.keys(enumerable).filter(a => a.match(/^\D/)).map(name => (new Enum(name, enumerable[name])));
    }
}