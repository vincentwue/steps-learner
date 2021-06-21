import { Subject } from "rxjs"


export const keys = [
    "B Dur ",
    "G# Moll",

    "A Dur ",
    "F# moll ",

    "F Dur",
    "D Moll",

    "C Dur",
    "A Moll",

    "G Dur",
    "E Moll",

    "Gb Dur",
    "Eb Moll",

    "Bb Dur",
    "G Moll",

    "Eb Dur",
    "C Moll",

    "Ab Dur",
    "F Moll",

    "F Dur",
    "Db Moll",

    "Db Dur",
    "Bb Moll",
]

export const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
]

export interface IState {
    number: string
    key: string
    ignore: string[]
}

export default class RandomController {

    private _key = keys[1]
    private _number = numbers[1]
    private _ignore: string[] = []

    private _onChange = new Subject<IState>()

    constructor() {
        this.nextNumber()
        this.nextKey()
        setInterval(() => {
            this.nextKey()
        }, 10000)
        setInterval(() => {
            this.nextNumber()
        }, 2000)
    }



    private publish() {
        this._onChange.next({
            number: this._number,
            key: this._key,
            ignore: this._ignore
        })
    }

    public nextNumber() {
        let n = "0"
        let i = 0
        while (n === "0" && i<100) {
            n = randomFromArray(numbers.filter(n => n !== this._number).filter(n => !this._ignore.includes(n)))
            i++
        }
        this._number = n
        this.publish()
    }

    public nextKey() {
        let k = undefined
        let i = 0
        while (!k && i<100) {
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