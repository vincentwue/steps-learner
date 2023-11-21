import { solmisation, solmisation7 } from "./Controller";
import Learner from "./Learner";
import Solmisation from "./Solmisation";

function getCombinations(valuesArray: String[]) {

    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
        temp = [];
        for (var j = 0; j < valuesArray.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp.push(valuesArray[j]);
            }
        }
        if (temp.length > 0) {
            combi.push(temp);
        }
    }

    combi.sort((a, b) => a.length - b.length);
    console.log(combi.join("\n"));
    return combi;
}

function permutation(array:any[]) {
    function p(array:any[], temp:any) {
        var i, x;
        if (!array.length) {
            result.push(temp);
        }
        for (i = 0; i < array.length; i++) {
            x = array.splice(i, 1)[0];
            p(array, temp.concat(x));
            array.splice(i, 0, x);
        }
    }

    var result : any[] = [];
    p(array, []);
    return result;
}

function generateSolmisations() {

    const all = getCombinations(solmisation7)
    .filter(arr => arr.length === 5)
    // const permutations = permutation(all)
    // .filter((e:string) => e.length === 6)
    // .filter((e:string) => {
    //     const a = e[0] + e[1]
    //     const b = e[2] + e[3]
    //     const c = e[4] + e[5]

    //     // debugger

    //     // if (a ==b ) return false
    //     // if (a ==c ) return false
    //     // if (c ==b ) return false



    //     return true
    // })

    const allPerm = []
    for (const arr of all) {
        allPerm.push(...permutation(arr))
    }

    const allPerm2 = allPerm
    .sort((a,b) => a>b ? -1:1).reverse()
    // .sort((a, b) => 0.5 - Math.random())
    .map(com => com.join(" ")).join("\n")

    console.log("jaai", allPerm.length,allPerm2)


}

export default function App() {

    generateSolmisations()


    return <div  >

        {/* <Solmisation></Solmisation> */}

        <Learner></Learner>

    </div>
}