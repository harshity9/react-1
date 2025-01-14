import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import './App.css'
import Input from './components/input'

function App() {

  const [count, setCount] = useState(0)
  const [currency, setCurrency] = useState('usd')

const CurrList = useCurrency(currency)
const CurrencyList =  Object.keys(CurrList)

function optionChanged(e){
  console.log(e.target.value)
  setCurrency(e.target.value)
}


  return (
    <>
    <div className=' shadow-lg shadow-black-500/50 w-3/5 mt-28 place-self-center'>
      <div>
          <h1 className='text-5xl bg-blue-500 min place-self-center'> Currency Converter</h1> 
      </div>  
      <div className='pb-10'>
        <div className='justify-self-center min-h-20 m-12 '>
          <Input/>
          <select className='mx-6 min-h-20 border-2 mx-10 p-8' name="" id="">

          {CurrencyList.map((item)=>{
            return <option value="">{item}</option>
          })}

          </select>
           </div>
        <div className='justify-self-center min-h-20 m-12'>
          <input className='min-h-20 border-2 mx-10 p-8' type="text" placeholder='To'/>
          <select onChange={optionChanged} className='mx-6 min-h-20 border-2 mx-10 p-8' name="" id="">

          {CurrencyList.map((item)=>{
            return <option onChange={optionChanged} value="">{item}</option>
          })}

    </select>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
