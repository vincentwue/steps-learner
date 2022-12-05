import { Subject } from "rxjs"


export const baseKeys = [

    "F Dur",
    "C Dur",
    "G Dur",
    "D Dur",
    "A Dur ",
    "E Dur",
    "B Dur ",
]
export const sharpKeys = [

    "C#",
    "D#",
    "F#",
    "G#",
    "A#",
]
export const flatKeys = [

    "Gb Dur",
    "Db Dur",
    "Ab Dur",
    "Eb Dur",
    "Bb Dur",
]

const solmisation = [
    "Do",
    "Ra",
    "Re",
    "Me",
    "Mi",
    "Fa",
    "Se",
    "So",
    "Le",
    "La",
    "Ti",
]

export const absoluteKeys = [

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

    ...solmisation,

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
    
    
    "b2",
    "#2",
    "b9",
    "9",
    "#9",
    
    
    "11",
    "#11",
    "b5",
    "#5",
    
    "13",
    "b13",
    
    "#4",

    "b6",

    "b7",
    
]

const startIgnore = [


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

    "b3",
    
    
    "b2",
    "#2",
    "b9",
    "9",
    "#9",
    
    
    "11",
    "#11",
    "b5",
    "#5",
    
    "13",
    "b13",
    
    "#4",

    "b6",

    "b7",

]

export interface IState {
    number: string
    key: string
    ignore: string[]
    keyChangeInterval: number
    numberChangeInterval: number
    filterDurMoll:boolean
    showScaleNotes:boolean
    hideNextButtons:boolean
    hideNumber:boolean
}

export enum Order {
    Random = "random",
    Quinten = "quinten",
    Quinten2 = "quinten2",
    Quarten = "quarten",
    Quarten2 = "quarten2",
}

const startKeyInterval = 1500
const startNumberInterval = 1500

// const keys = absoluteKeys
export const keys = [...absoluteKeys, ...solmisation]

export default class RandomController {

    private _key = keys[1]
    private _number = numbers[1]
    private _ignore: string[] = []

    private _onChange = new Subject<IState>()

    private _numberChangeInterval: number = startNumberInterval
    private _keyChangeInterval: number = startKeyInterval

    private _order: Order = Order.Quinten

    private _filterDurMoll = false
    private _showScaleNotes = false
    private _hideNextButtons = false
    private _hideNumber = false

    public set filterDurMoll(bool : boolean) {
        this._filterDurMoll = bool
        this.publish()
    }

    public set showScaleNotes(bool : boolean) {
        this._showScaleNotes = bool
        this.publish()
    }
    public set hideNextButtons(bool : boolean) {
        this._hideNextButtons = bool
        this.publish()
    }
    public set hideNumber(bool : boolean) {
        
        this._hideNumber = bool
        this.publish()
    }
    public set numberChangeInterval(n : number) {
        this._numberChangeInterval = n
        this.publish()
    }
    public set keyChangeInterval(n : number) {
        this._keyChangeInterval = n
        this.publish()
    }
    public get hideNextButtons() {
        return this._hideNextButtons
    }
    public get showScaleNotes() {
        return this._showScaleNotes
    }
    public get filterDurMoll() {
        return this._filterDurMoll
    }
    public get hideNumber() {
        return this._hideNumber
    }
    public get numberChangeInterval() {
        return this._numberChangeInterval
    }
    public get keyChangeInterval() {
        return this._keyChangeInterval
    }


    private saveToLocalStorage() {
        // debugger
        localStorage.setItem("settings", JSON.stringify(this.state))
        console.log("saved to localStorage")
    }

    private loadFromLocalStorage() {
        const json = localStorage.getItem("settings")
        if (json) {
            console.log("loaded from localStorage")
            const ob = JSON.parse(json)
            for (const [key, value ] of Object.entries(ob)) {
                
                (this as any)["_" + key] = value;
                console.log(key, value, this)
            }
        }
    }



    constructor() {

        
        this.loadFromLocalStorage()
        
        this.startIntervals(this._keyChangeInterval, this._numberChangeInterval)
        this.nextNumber()
        this.nextKey()

        
        
        this.publish()
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
            filterDurMoll: this._filterDurMoll,
            hideNumber: this._hideNumber,
            hideNextButtons: this._hideNextButtons,
            showScaleNotes: this._showScaleNotes,
        }
    }

    private publish() {
        this.saveToLocalStorage()
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