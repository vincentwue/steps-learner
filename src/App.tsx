import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomController, { IState, keys, numbers } from './Controller';
import { classicNameResolver } from 'typescript';

import classes from "./App.module.css"

function App() {

  const [state, setState] = useState<IState>()

  const [controller] = useState(new RandomController())

  const [hideNumber, setHideNumber] = useState(false)
  const [filterDurMoll, setFilterDurMoll] = useState(false)

  useEffect(() => {
    setState(controller.state)
    controller.onChange.subscribe(state => {
      setState(state)
    })
  }, [controller, setState])

  console.log(state)

  const ignore = [...keys, ...numbers].map(s => <button
    className={(state?.ignore.includes(s) ? classes.ignored : classes.included) + " " + classes.ignoreButton}
    onClick={e => {
      if (state) {

        if (!state.ignore.includes(s)) {
          controller.ignore = [...state.ignore, s]
        } else {
          controller.ignore = state.ignore.filter(item => item !== s)
        }

      }
    }}>{s}</button>)

  const options = [
    <option value="500">0.3 second</option>,
    <option value="500">0.4 second</option>,
    <option value="500">0.5 second</option>,
    <option value="600">0.6 second</option>,
    <option value="700">0.7 second</option>,
    <option value="800">0.8 second</option>,
    <option value="900">0.9 second</option>,
    <option value="1000">1 second</option>,
    <option value="1500">1.5 seconds</option>,
    <option value="2000">2 seconds</option>,
    <option value="3000">3 seconds</option>,
    <option value="4000">4 seconds</option>,
    <option value="5000">5 seconds</option>,
    <option value="7000">7 seconds</option>,
    <option value="10000">10 seconds</option>,
    <option value="12000">12 seconds</option>,
    <option value="20000">20 seconds</option>,
    <option value="30000">30 seconds</option>,
  ]
  return (
    <div className="App">
      <div><button onClick={e => controller.nextKey()}>next key</button></div>


      <div className={classes.box}>
        <div className={classes.key}>{
          !filterDurMoll ? state?.key
          : state?.key.replace(" Dur", "").replace(" Moll", "")
        }</div>
        {!hideNumber &&
          <div className={classes.number}>{state?.number}</div>

        }
      </div>

  

      <div>

        <button onClick={e => {
          setHideNumber(!hideNumber)
        }}>hide number</button>
      </div>
      <div>

        <button onClick={e => {
          setFilterDurMoll(!filterDurMoll)
        }}>filter dur moll</button>
      </div>

      <div><button onClick={e => {
        if (state?.ignore.length === 0) {
          controller.ignore = keys
        } else {
          controller.ignore = []
        }
      }}>all</button></div>

      <div className={classes.ignore}>{ignore}</div>
      <div className={classes.flexcolumn}>




        <div className={classes.flexrow}>



          key change interval:
          <select name="keys" id="keyID"
            onChange={e => {
              controller.startIntervals(parseFloat(e.target.value), controller.state.numberChangeInterval)
            }}>

            <option value="12000">12 seconds (standard)</option>

            {options}

          </select>
        </div>

        <div className={classes.flexrow}>



          step change interval:
          <select name="numbers" id="numberID" /* value={state?.numberChangeInterval.toString() && "2000"} */
            onChange={e => {
              controller.startIntervals(controller.state.keyChangeInterval, parseFloat(e.target.value))
            }}>

            <option value="1500">1.5 seconds (standard)</option>

            {options}

          </select>
        </div>

        <div className={classes.flexrow}>


          <a target="_blank" href={"https://github.com/vincentwue/steps-learner"} >More information on Github</a>

        </div>

      </div>
    </div>
  );
}

export default App;
