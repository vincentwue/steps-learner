import { Subject } from "rxjs"

export const solmisationColors = [
    "#138708",//"Do", grün ionisch
    "",//"Ra",
    "#3cd6d4",//"Re", türkis
    "",//"Me",
    "#b31212",//"Mi", phrygisch
    "#ed7505",//"Fa", orange lydisch
    "",//"Se",
    "#ac1bfa",//"So", purple mixo
    "",//"Le",
    "#ffdb38",//"La", gelb moll
    "",//"Li",
    "#996100",//"Ti", braun lokrisch
]

export function colorBody(solmisationSymbol:string|undefined, justWhite:boolean=true) {
    let color = "white"
    if (solmisationSymbol && !justWhite) {
        const index = solmisation.indexOf(solmisationSymbol)
        if (index>-1) {
            if (solmisationColors[index])
            color = solmisationColors[index]

            console.log("Color! :)", color, index, solmisationColors,)
        }
    }
    const body = document.querySelector("body")

    if (body) {
        body.style.background = color
    }

}

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

export const solmisation = [
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
    "Li",
    "Ti",
]
export const solmisation7 = [
    "Do",
    "Re",
    "Mi",
    "Fa",
    "So",
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
    "8",
    "9",
    "#9",
    
    
    "#4",
    "11",
    "#11",

    "b5",
    "#5",
    
    "b6",
    "b13",
    "13",
    


    "b7",
    
]

export const otherThanStandardSeven = [
    "b3",
    
    
    "b2",
    "#2",
    "b9",
    "8",
    "9",
    "#9",
    
    
    "#4",
    "11",
    "#11",

    "b5",
    "#5",
    
    "b6",
    "b13",
    "13",
    


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
    number2: string
    key: string
    ignore: string[]
    keyChangeInterval: number
    numberChangeInterval: number
    numberChangeInterval2: number
    filterDurMoll:boolean
    showScaleNotes:boolean
    hideNextButtons:boolean
    hideNumber:boolean
    showColors:boolean
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
const startNumberInterval2 = 1500

export const keys = absoluteKeys
// export const keys = [...absoluteKeys, ...solmisation]

export default class RandomController {

    private _showColors = false

    private _key = keys[1]
    private _number = numbers[1]
    private _number2 = numbers[1]
    private _ignore: string[] = []

    private _onChange = new Subject<IState>()

    private _numberChangeInterval: number = startNumberInterval
    private _numberChangeInterval2: number = startNumberInterval2
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

    public set showColors(boool:boolean) {
        this._showColors = boool
        this.publish()
    }

    public get showColors() {
        return this._showColors
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
    public get keyChangeInterval() {
        return this._keyChangeInterval
    }


    private saveToLocalStorage() {
        // debugger
        localStorage.setItem("settings", JSON.stringify(this.state))
        // console.log("saved to localStorage")
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
        
        this.startIntervals(this._keyChangeInterval, this._numberChangeInterval, this._numberChangeInterval2)
        this.nextNumber()
        this.nextKey()

        
        
        this.publish()
    }

    private _keyIntervalId: number | undefined
    private _numberIntervalId: number | undefined
    private _numberIntervalId2: number | undefined

    public set order(order: Order) {
        this._order = order
    }

    public startIntervals(keyInterval: number, numberInterval: number, numberInterval2:number) {
        console.log("Start ----------", keyInterval, numberInterval)

        this.startNumberInterval(numberInterval)
        this.startNumberInterval2(numberInterval2)
        this.startKeyInterval(keyInterval)
        this.publish()
    }

    public startKeyInterval(keyInterval: number) {

        if (this._keyIntervalId !== undefined) {
            window.clearInterval(this._keyIntervalId)
        }


        this._keyChangeInterval = keyInterval
        console.log("start key interval")

        this._keyIntervalId = window.setInterval(() => {
            this.nextKey()
        }, keyInterval)


    }

    public startNumberInterval(numberInterval: number) {
        
        if (this._numberIntervalId !== undefined) {
            window.clearInterval(this._numberIntervalId)
        }


        this._numberChangeInterval = numberInterval

        console.log("start number interval")


        this._numberIntervalId = window.setInterval(() => {
            this.nextNumber()
        }, numberInterval)


    }

    public startNumberInterval2(numberInterval: number) {
        
        if (this._numberIntervalId2 !== undefined) {
            window.clearInterval(this._numberIntervalId2)
        }


        this._numberChangeInterval2 = numberInterval

        console.log("start number interval2")
        

        this._numberIntervalId2 = window.setInterval(() => {
            this.nextNumber2()
        }, numberInterval)


    }


    public get state() {
        return {
            number: this._number,
            number2: this._number2,
            key: this._key,
            ignore: this._ignore,
            keyChangeInterval: this._keyChangeInterval,
            numberChangeInterval: this._numberChangeInterval,
            numberChangeInterval2: this._numberChangeInterval2,
            filterDurMoll: this._filterDurMoll,
            hideNumber: this._hideNumber,
            hideNextButtons: this._hideNextButtons,
            showScaleNotes: this._showScaleNotes,
            showColors:this.showColors
        }
    }

    private publish() {
        this.saveToLocalStorage()
        this._onChange.next(this.state)
    }

    public nextNumber() {
        // clearInterval(this.numberChangeInterval)
        let n = "0"
        let i = 0
        while (n === "0" && i < 100) {
            n = randomFromArray(numbers.filter(n => n !== this._number).filter(n => !this._ignore.includes(n)))
            i++
        }
        this._number = n
        // this.startNumberInterval(this._numberChangeInterval)
        this.publish()
    }

    public nextNumber2() {
        // clearInterval(this.numberChangeInterval)
        let n = "0"
        let i = 0
        while (n === "0" && i < 100) {
            n = randomFromArray(numbers.filter(n => n !== this._number2).filter(n => !this._ignore.includes(n)))
            i++
        }
        this._number2 = n
        // this.startNumberInterval2(this._numberChangeInterval2)
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