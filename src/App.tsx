import React, { useEffect, useState } from 'react';
import './App.css';
import RandomController, { baseKeys, flatKeys, IState, keys, numbers, Order, sharpKeys } from './Controller';

import classes from "./App.module.css"
import { getNoteFromStep, Scales } from './scales';

const options = [
  <option value="300">0.3 seconds</option>,
  <option value="400">0.4 seconds</option>,
  <option value="500">0.5 seconds</option>,
  <option value="600">0.6 seconds</option>,
  <option value="700">0.7 seconds</option>,
  <option value="800">0.8 seconds</option>,
  <option value="900">0.9 seconds</option>,
  <option value="1000">1 second</option>,
  <option value="1200">1.2 seconds</option>,
  <option value="1400">1.4 seconds</option>,
  <option value="1600">1.6 seconds</option>,
  <option value="1700">1.7 seconds</option>,
  <option value="1800">1.8 seconds</option>,
  <option value="1900">1.9 seconds</option>,
  <option value="2000">2 seconds</option>,
  <option value="2300">2.3 seconds</option>,
  <option value="2400">2.4 seconds</option>,
  <option value="2500">2.5 seconds</option>,
  <option value="2600">2.6 seconds</option>,
  <option value="2700">2.7 seconds</option>,
  <option value="2800">2.8 seconds</option>,
  <option value="2900">2.9 seconds</option>,
  <option value="3000">3 seconds</option>,
  <option value="3500">3.5 seconds</option>,
  <option value="4000">4 seconds</option>,
  <option value="5000">5 seconds</option>,
  <option value="7000">7 seconds</option>,
  <option value="10000">10 seconds</option>,
  <option value="12000">12 seconds</option>,
  <option value="20000">20 seconds</option>,
  <option value="30000">30 seconds</option>,
  <option value="60000">1 min</option>,
  <option value="90000">1.5 min</option>,
  <option value="120000">2 mins</option>,
  <option value="180000">3 mins</option>,
  <option value="240000">4 mins</option>,
  <option value="300000">5 mins</option>,
  <option value="360000">6 mins</option>,
]

const controller = new RandomController()

function App() {

  const [state, setState] = useState<IState>()

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

  if (!state) return null

  const key = !state.filterDurMoll ? state?.key : state?.key?.replace(" Dur", "").replace(" Moll", "")
  const number = !state.showScaleNotes ? state?.number : getNoteFromStep(state?.key, state?.number) ?? "no note representation found, only choose 1-7"

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
        {!state.hideNumber &&
          <div className={classes.number}>{number}</div>

        }
        {!state.hideNextButtons &&
        <React.Fragment>
          <div><button className="nextKey" onClick={e => controller.nextKey()}>next key</button></div>
          <div><button className="nextStep" onClick={e => controller.nextNumber()} style={{display:state.hideNumber ? "none" : ""}}>next step</button></div>
        </React.Fragment>
        }
      </div>



      <div>
        <button
          style={{ backgroundColor: state.hideNumber ? "green" : "initial" }}
          onClick={e => {
        
            controller.hideNumber  = !state.hideNumber
          }}>hide number</button>
      </div>


      <div>
        <button style={{ backgroundColor: state.filterDurMoll ? "green" : "initial" }}
          onClick={e => {
            controller.filterDurMoll  = !state.filterDurMoll
          }}>filter dur moll</button>
      </div>
      <div>
        <button style={{ backgroundColor: state.hideNextButtons ? "green" : "initial" }}
          onClick={e => {
            controller.hideNextButtons = !state.hideNextButtons
          }}>hide next buttons</button>
      </div>


      <div >
        <button style={{ backgroundColor: state.showScaleNotes ? "green" : "initial" }}
          onClick={e => {
            controller.showScaleNotes  = !state.showScaleNotes
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
            {/* <option value="1500">1.5 seconds (standard)</option> */}
            {options.filter((o:any) => {
              const res = o.props.value === (state.keyChangeInterval+"")
              // console.log(o, res ? "truee" : "faalse")
              // debugger
              return res
            })}

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

            {/* <option value="1500">1.5 seconds (standard)</option> */}
            {options.filter((o:any) => {
              const res = o.props.value === (state.numberChangeInterval+"")
              // console.log(o, res ? "truee" : "faalse")
              // debugger
              return res
            })}

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
