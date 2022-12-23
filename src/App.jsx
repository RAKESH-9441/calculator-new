import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reslult, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(reslult.concat(event.target.value))

  }

  const clearDisplay = () => {
    setResult("");
  }

  const calculate = () => {
    setResult(eval(reslult).toString())
  }

  return (
    <div className="calc">
      <input type="button" value={reslult} placeholder='0' className='answer' />
      <div>
        <input type="button" value="+" className='btn' onClick={clickHandler} />

        <input type="button" value="-" className='btn' onClick={clickHandler} />
        <input type="button" value="=" className='btn' onClick={calculate} />
        <input type="button" value="C" className='btn' onClick={clearDisplay} />
      </div>
      <div >
        <input type="button" value="9" className='btn' id='calc2' onClick={clickHandler} />
        <input type="button" value="8" className='btn' id='calc2' onClick={clickHandler} />
        <input type="button" value="7" className='btn' id='calc2' onClick={clickHandler} />
        <input type="button" value="6" className='btn' id='calc2' onClick={clickHandler} />
      </div>
      <div>
        <input type="button" value="5" className='btn' onClick={clickHandler} />
        <input type="button" value="4" className='btn' onClick={clickHandler} />
        <input type="button" value="3" className='btn' onClick={clickHandler} />
        <input type="button" value="2" className='btn' onClick={clickHandler} />
      </div>
      <input type="button" value="1" className='btn' onClick={clickHandler} />
      <input type="button" value="." className='btn' onClick={clickHandler} />
      <input type="button" value="/" className='btn' onClick={clickHandler} />
      <input type="button" value="*" className='btn' onClick={clickHandler} />


    </div>
  );
}

export default App;
