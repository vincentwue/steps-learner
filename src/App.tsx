import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomController, { IState, keys, numbers } from './Controller';
import { classicNameResolver } from 'typescript';

import classes from "./App.module.css"

function App() {

  const [state, setState] = useState<IState>()

  const [controller] = useState(new RandomController())

  useEffect(() => {
    controller.onChange.subscribe(state => {
      setState(state)
    })
  }, [])

  console.log(state)

  const ignore = [...keys, /* ...numbers */].map(s => <button
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

  return (
    <div className="App">
      <div><button onClick={e => controller.nextKey()}>next key</button></div>


      <div className={classes.box}>
        <div className={classes.key}>{state?.key}</div>
        <div className={classes.number}>{state?.number}</div>
      </div>

      <div><button onClick={e => {
        if (state?.ignore.length === 0) {
          controller.ignore = keys
        } else {
          controller.ignore = []
        }
      }}>all</button></div>
      <div className={classes.ignore}>{ignore}</div>

    </div>
  );
}

export default App;
