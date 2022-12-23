import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  function handleStep(e) {
    setStep(e.target.value);
  }
  return (
    <div className="App">
      <div>
        <h2>Counter: {counter}</h2>
        <button
          onClick={() => {
            if (counter - parseInt(step) > 0) {
              setCounter(counter - parseInt(step));
            }
          }}
        >
          Decrement
        </button>
        <select value={step} onChange={handleStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <button
          onClick={() => {
            setCounter(counter + parseInt(step));
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
