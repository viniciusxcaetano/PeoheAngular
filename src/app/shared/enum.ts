export class Enum {

    key: string;
    value: number;

    static items: Enum[];
    static Items: Enum;

    constructor(key: string, value: any) {
        this.key = key;
        this.value = value as number;
    }

    static get(enumerable: any) {
        return this.items = Object.keys(enumerable).filter(a => a.match(/^\D/)).map(name => (new Enum(name, enumerable[name])));
    }

    static default() {
        return this.items[0];
    }
}