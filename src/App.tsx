import React, { useEffect, useState } from 'react';
import './App.css';
import RandomController, { baseKeys, flatKeys, IState, keys, numbers, Order, sharpKeys } from './Controller';

import classes from "./App.module.css"
import { getNoteFromStep, Scales } from './scales';

const controller = new RandomController()

function App() {

  const [state, setState] = useState<IState>()


  const [hideNumber, setHideNumber] = useState(true)
  const [filterDurMoll, setFilterDurMoll] = useState(true)
  const [showScaleNotes, setShowScaleNotes] = useState(false)
  const [hideNextButtons, setHideNextButtons] = useState(true)

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

  const options: any = [
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
    <option value="60000">60 seconds</option>,
    <option value="90000">90 seconds</option>,
    <option value="120000">2 mins</option>,
    <option value="180000">3 mins</option>,
    <option value="240000">4 mins</option>,
    <option value="300000">5 mins</option>,
    <option value="360000">6 mins</option>,
  ]

  const key = !filterDurMoll ? state?.key : state?.key?.replace(" Dur", "").replace(" Moll", "")
  const number = !showScaleNotes ? state?.number : getNoteFromStep(state?.key, state?.number) ?? "no note representation found, only choose 1-7"
  console.log(Scales)

  return (
    <div className="App">
      {/* <div><button onClick={e => {
        controller.startIntervals(2000, 3000);
        setHideNumber(true)
        setFilterDurMoll(true)
      }}>learn hashmap</button></div> */}


      <div className={classes.box}>
        <div className={classes.key}>{
          key
        }</div>
        {!hideNumber &&
          <div className={classes.number}>{number}</div>

        }
        {!hideNextButtons &&
        <React.Fragment>
          <div><button onClick={e => controller.nextKey()}>next key</button></div>
          <div><button onClick={e => controller.nextNumber()} style={{display:hideNumber ? "none" : ""}}>next step</button></div>
        </React.Fragment>
        }
      </div>



      <div>
        <button
          style={{ backgroundColor: hideNumber ? "green" : "initial" }}
          onClick={e => {
            setHideNumber(!hideNumber)
          }}>hide number</button>
      </div>


      <div>
        <button style={{ backgroundColor: filterDurMoll ? "green" : "initial" }}
          onClick={e => {
            setFilterDurMoll(!filterDurMoll)
          }}>filter dur moll</button>
      </div>
      <div>
        <button style={{ backgroundColor: hideNextButtons ? "green" : "initial" }}
          onClick={e => {
            setHideNextButtons(!hideNextButtons)
          }}>hide next buttons</button>
      </div>


      <div >
        <button style={{ backgroundColor: showScaleNotes ? "green" : "initial" }}
          onClick={e => {
            setShowScaleNotes(!showScaleNotes)
          }}>show scale notes</button>
      </div>



      <div><button onClick={e => {
        if (state?.ignore.length === 0) {
          controller.ignore = keys
        } else {
          controller.ignore = []
        }
      }}>all</button></div>
      <div><button onClick={e => {
        if (state?.ignore.length === 0) {
          controller.ignore = keys
        } else {
          // controller.ignore = []
          controller.ignore = [...flatKeys, ...baseKeys]
        }
      }}>sharps</button></div>
      <div><button onClick={e => {
        if (state?.ignore.length === 0) {
          controller.ignore = keys
        } else {
          controller.ignore = []
          controller.ignore = [...sharpKeys, ...baseKeys]
        }
      }}>flats</button></div>
      <div><button onClick={e => {
        if (state?.ignore.length === 0) {
          controller.ignore = keys
        } else {
          controller.ignore = [...sharpKeys, ...flatKeys]
        }
      }}>base notes</button></div>

      <div className={classes.ignore}>{ignore}</div>
      <div className={classes.flexcolumn}>




        <div className={classes.flexrow}>



          key change interval:
          <select name="keys" id="keyID"
            onChange={e => {
              console.log("ONCHANGE1", e.target.value)
              controller.startIntervals(parseFloat(e.target.value), controller.state.numberChangeInterval)
            }}>

            {/* <option value="60000">1 mins (standard)</option> */}
            <option value="1500">1.5 seconds (standard)</option>

            {options}

          </select>
        </div>

        <div className={classes.flexrow}>



          step change interval:
          <select name="numbers" id="numberID" /* value={state?.numberChangeInterval.toString() && "2000"} */
            onChange={e => {
              console.log("ONCHANGE2", e.target.value)
              controller.startIntervals(controller.state.keyChangeInterval, parseFloat(e.target.value))
            }}>

            <option value="1500">1.5 seconds (standard)</option>

            {options}

          </select>
        </div>

        <div className={classes.flexrow}>



          order:
          <select name="order" id="orderID" /* value={state?.numberChangeInterval.toString() && "2000"} */
            onChange={e => {
              controller.order = e.target.value as Order
            }}>

            <option value={Order.Quinten}>Quinten</option>
            <option value={Order.Quinten2}>Quinten 2</option>
            <option value={Order.Quarten}>Quarten</option>
            <option value={Order.Quarten2}>Quarten 2</option>
            <option value={Order.Random}>Random</option>



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
