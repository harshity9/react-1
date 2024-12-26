import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);
  const addition=()=>{
    setCounter(counter+1)
  }
  const subtraction = () =>{
    setCounter(counter-1)
  }
return (<>
   <h2> Click Counnter: {counter} </h2>
   <button onClick={addition}>
    Add
   </button>
   <button onClick={subtraction}>
    Subtract
   </button>
   </>
  );
}

export default App;
