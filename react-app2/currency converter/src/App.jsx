import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' shadow-lg shadow-black-500/50 w-3/5 mt-28 place-self-center'>
      <div>
          <h1 className='text-5xl bg-blue-500 min place-self-center'> Currency Converter</h1> 
      </div>  
      <div>
        <div className='justify-self-center bg-yellow-500 min-h-20 m-12 '>
          <input className='min-h-20 bg-green-500 mx-10 p-8' type="text" value={'ygfyjufvhyj'}/>
          <input className='mx-6 min-h-20 bg-green-500 mx-10 p-8' type="text" value={'ygfyjufvhyj'}/>
        </div>
        <div className='justify-self-center bg-yellow-500 min-h-20 m-12 '>
          <input className='min-h-20 bg-green-500 mx-10 p-8' type="text" value={'ygfyjufvhyj'}/>
          <input className='mx-6 min-h-20 bg-green-500 mx-10 p-8' type="text" value={'ygfyjufvhyj'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
