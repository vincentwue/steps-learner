import { abort } from "process"
import { elementAt } from "rxjs/operators"

export default function Solmisation() {

    return <div style={{ margin: 100 }}>

        solmisation
        <table >

            <tr>
                <th>
                    source
                </th>
                <th>
                    target
                </th>
                <th>
                    interval
                </th>
                {/* <th>
                    direction
                </th> */}
            </tr>

            <tbody
            >
                {getPairs().map(pair => {
                    return <tr>
                        <td>{pair.source.symbol}</td>
                        <td>{pair.target.symbol}</td>
                        <td>{pair.interval?.string}</td>
                        {/* <td>{pair.direction}</td> */}

                    </tr>

                })}
            </tbody>
        </table>

    </div >

}

const steps = [
    0, 2, 4, 5, 7, 9, 11, 12
]
const symbols = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti", "Do"]
const intervals2 = [
    "1",
    "b9",
    "9",
    "b3",
    "3",
    "4",
    "b5",
    "5",
    "b13",
    "13",
    "b7",
    "7",
]
const intervals = [
    "1",
    "kl Sekunde",
    "gr Sekunde",
    "kl Terz",
    "gr Terz",
    "Quarte",
    "Tritonus",
    "Quinte",
    "kl Sexte",
    "gr Sexte",
    "kl Septime",
    "gr Septime",
]


interface Symbol {
    step: number
    symbol: string
    index: number
}

interface Interval {
    string: string
    number: number
}

interface Pair {
    source: Symbol
    target: Symbol
    interval?: Interval
    direction?: "up" | "down"
}

function getPairs() {

    const mapped: Symbol[] = symbols.map((s, i) => ({ step: steps[i], symbol: s, index: i }))

    console.log(mapped)
    let pairs: Pair[] = []


    for (const source of mapped) {
        for (const target of mapped) {
            if (source.symbol == target.symbol) continue
            if (pairs.some(el => el.target.symbol === target.symbol && el.source.symbol === source.symbol)) continue
            pairs.push({
                target, source
            })
        }
    }



    for (const pair of pairs) {

        console.log(pair.source, pair.target, pair)

        let interval: number
        if (pair.source.step <= pair.target.step) {
            interval = pair.target.step - pair.source.step
            pair.direction = "up"
        } else {
            // interval = pair.target.step + pair.source.step % 12
            // if (interval > 11 || interval<0)debugger
            interval = pair.target.step +12- pair.source.step  
            // debugger

            // pair.direction = "up"
            pair.direction = "down"
        }
        if (interval) {
            pair.interval = { string: intervals[interval], number: interval }
        }
    }
    // pairs = pairs.filter(pair => pair.interval && !isNaN( pair.interval))

    // pairs = pairs.filter(pair => pair.direction === "up")
    pairs = pairs.filter(pair => pair.source.symbol !== pair.target.symbol)


    pairs = pairs.sort((a, b) => {
        if (a.interval && b.interval) {

            return a.interval?.number > b.interval?.number ? -1 : 1

        }
        debugger
        return -1
    }).reverse()


    console.log("filtered", pairs)

    return pairs

}