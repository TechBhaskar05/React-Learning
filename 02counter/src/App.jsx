import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const AddValue = () => {
    if (counter == 20) {
      setCounter(counter = 20)
    }
    else {
      counter = counter + 1;
      setCounter(counter)
    }

    // setCounter(counter + 1)

    // console.log("Value added", Math.random());
    console.log("Clicked", counter);
  }

  const RemoveValue = () => {
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter)
    }
    else {
      setCounter(counter = 0)
    }
    console.log("Clicked", counter);
  }
  return (
    <>


      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Add Value {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
