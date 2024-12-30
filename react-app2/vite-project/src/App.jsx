import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed]= useState (false);
  const [charAllowed, setcharAllowed]= useState(false);
  const [password, setpassword]= useState(false);
  const passgenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
    if(numAllowed) str += '1234567890'
    if(charAllowed) str +='!@#$%^&*()-_=+\|{};:/?.>'

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass = str.charAt(char)
   }
   setpassword(pass)

  }, [length,numAllowed, charAllowed])
  
  return (
    <>
   
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8px text-yellow-500 bg-gray-700' >
 <h1 className='text-white text-center'>Password generator
 </h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
      type="text" 
      value={password}
      className='outline-none w-full py-1 px-3 my-5'
      placeholder='Generated password'
      readOnly/>
      <button 
        className="font-bold rounded-lg uppercase bg-[orange] text-[#ffffff] justify-center my-5">
  Copy
      </button>
</div>
<div>
<input 
type="range"
min={6}
max={40}
value={length}
className='cursor-pointer'
onChange={(e)=>{
  setlength(e.target.value)
}}
/>
<label htmlFor="">Length: {length}</label>
</div>
</div>
  
    </>
  )
}

export default App
