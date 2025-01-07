import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import './App.css'
import Input from './components/input'

function App() {
  const [count, setCount] = useState(0)
  const [currency, setCurrency] = useState('usd')

const CurrList = useCurrency(currency)
const CurrencyList =  Object.keys(CurrList)


  return (
    <>
    <div className=' shadow-lg shadow-black-500/50 w-3/5 mt-28 place-self-center'>
      <div>
          <h1 className='text-5xl bg-blue-500 min place-self-center'> Currency Converter</h1> 
      </div>  
      <div className='pb-10'>
        <div className='justify-self-center min-h-20 m-12 '>
          <Input/>
          <input className='mx-6 min-h-20 border-2 mx-10 p-8' type="text"  value={'INR'}/>
        </div>
        <div className='justify-self-center min-h-20 m-12'>
          <input className='min-h-20 border-2 mx-10 p-8' type="text" placeholder='To'/>
          <input className='mx-6 min-h-20 mx-10 p-8 border-2' type="text" value={'USD'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
