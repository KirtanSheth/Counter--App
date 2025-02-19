import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decreseHandler(){
    setCount(count - 1);
  }

  function increaseHandler(){
    setCount(count + 1);
  }

  function resetHandler(){
    setCount(0);
  }
  return (
    
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <h2 className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</h2>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl"> {count} </div>
        <button onClick={increaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>

      <div>
        <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-sm text-lg">Reset</button>
      </div>
    </div>

   
  );
}

export default App;
