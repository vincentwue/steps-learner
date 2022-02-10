import { Subject } from "rxjs"


export const keys = [

    "F Dur",
    "C Dur",
    "G Dur",
    "D Dur",
    "A Dur ",
    "E Dur",
    "B Dur ",
    
    "Gb Dur",
    "Db Dur",
    "Ab Dur",
    "Eb Dur",
    "Bb Dur",

    "C#",
    "D#",
    "F#",
    "G#",
    "A#",


    // "E#",
    // "H#",








    // "A Moll",
    // "E Moll",
    // "F Moll",
    // "D Moll",
    // "C Moll",

    // "B Moll",
    // "G Moll",

    // "G# Moll",

    // "F# Moll ",

    // "Eb Moll",


    // "C# Moll",

    // "Bb Moll",
]

export const numbers = [
    
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    
    
    "b3",
    "Δ",
    
    
    "#11",
    "b5",
    
    "9",
    "11",
    "13",
    
    "b9",
    "b13",
    
]

const startIgnore = [
    "b3",
    "Δ",
    
    
    "#11",
    "b5",

    "9",
    "11",
    "13",

    "b9",
    "b13",

    "F Dur",
    "C Dur",
    "G Dur",
    "D Dur",
    "A Dur ",
    "E Dur",
    "B Dur ",
    
    "Gb Dur",
    // "Db Dur",
    // "Ab Dur",
    "Eb Dur",
    "Bb Dur",

    "C#",
    "D#",
    "F#",
    "G#",
    "A#",

]

export interface IState {
    number: string
    key: string
    ignore: string[]
    keyChangeInterval: number
    numberChangeInterval: number
}

export enum Order {
    Random = "random",
    Quinten = "quinten",
    Quinten2 = "quinten2",
    Quarten = "quarten",
    Quarten2 = "quarten2",
}

export default class RandomController {

    private _key = keys[1]
    private _number = numbers[1]
    private _ignore: string[] = startIgnore

    private _onChange = new Subject<IState>()

    private _numberChangeInterval: number = 1500
    private _keyChangeInterval: number = 60000

    private _order: Order = Order.Quinten

    constructor() {
        this.nextNumber()
        this.nextKey()
        this.publish()
        this.startIntervals(60000, 1500)
    }

    private _keyIntervalId: number | undefined
    private _numberIntervalId: number | undefined

    public set order(order: Order) {
        this._order = order
    }

    public startIntervals(keyInterval: number, numberInterval: number) {
        console.log("Start ----------", keyInterval, numberInterval)

        if (this._numberIntervalId !== undefined) {
            window.clearInterval(this._numberIntervalId)
        }
        if (this._keyIntervalId !== undefined) {
            window.clearInterval(this._keyIntervalId)
        }


        this._numberChangeInterval = numberInterval
        this._keyChangeInterval = keyInterval
        console.log(this.state)

        this._keyIntervalId = window.setInterval(() => {
            this.nextKey()
        }, keyInterval)
        this._numberIntervalId = window.setInterval(() => {
            this.nextNumber()
        }, numberInterval)

        this.publish()

    }


    public get state() {
        return {
            number: this._number,
            key: this._key,
            ignore: this._ignore,
            keyChangeInterval: this._keyChangeInterval,
            numberChangeInterval: this._numberChangeInterval,
        }
    }

    private publish() {
        this._onChange.next(this.state)
    }

    public nextNumber() {
        let n = "0"
        let i = 0
        while (n === "0" && i < 100) {
            n = randomFromArray(numbers.filter(n => n !== this._number).filter(n => !this._ignore.includes(n)))
            i++
        }
        this._number = n
        this.publish()
    }

    public nextKey() {
        const filteredKeys = keys.filter(n => !this._ignore.includes(n))
        const currentIndex = filteredKeys.indexOf(this._key)
        if (this._order === Order.Random) {
            this.nextRandomKey()
        } else if (this._order === Order.Quinten) {
            this._key = filteredKeys[(currentIndex + 1) % filteredKeys.length]
            this.publish()
        } else if (this._order === Order.Quinten2) {
            this._key = filteredKeys[(currentIndex + 2) % filteredKeys.length]
            this.publish()
        } else if (this._order === Order.Quarten) {
            this._key = filteredKeys[(currentIndex - 1) % filteredKeys.length]
            this.publish()
        } else if (this._order === Order.Quarten2) {
            this._key = filteredKeys[(currentIndex - 2) % filteredKeys.length]
            this.publish()
        }


    }

    private nextRandomKey() {
        let k = undefined
        let i = 0
        while (!k && i < 100) {
            k = randomFromArray(keys.filter(n => n !== this._key).filter(n => !this._ignore.includes(n)))
            i++
        }
        if (k) {
            this._key = k
            this.publish()
        }
    }

    public get ignore() {
        return this._ignore
    }

    public set ignore(arr: string[]) {
        this._ignore = arr
        this.publish()
    }


    public get onChange() {
        return this._onChange
    }


}

function randomFromArray(arr: string[]) {
    return arr[Math.floor((Math.random() * arr.length))];
}