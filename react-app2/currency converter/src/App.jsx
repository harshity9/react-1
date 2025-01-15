import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import './App.css'
import Input from './components/input'

function App() {
  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')


  const currency = ('usd')

const CurrList = useCurrency(currency)
const CurrencyList =  Object.keys(CurrList)

function optionChangedFrom(e){ 
  setFrom(e.target.value)
 }
 function optionChangedTo(e){ 
  setTo(e.target.value)
 }
  return (
    <>
    <div className=' shadow-lg shadow-black-500/50 w-3/5 mt-28 place-self-center'>
      <div>
          <h1 className='text-5xl bg-blue-500 min place-self-center'> Currency Converter</h1> 
      </div>  
      <div className='pb-10'>
        <div className='justify-self-center min-h-20 m-12 '>
        
        <input value={fromValue} onChange={setFromValue} className='min-h-20 border-2 mx-10 p-8' type="text" placeholder='From'/>

          <select value={from} onChange={optionChangedFrom} className='mx-6 min-h-20 border-2 mx-10 p-8' name="" id="">

          {CurrencyList.map((item, index)=>{
            return <option key={index} value={item}>{item}</option>
          })}

          </select>
           </div>
        <div className='justify-self-center min-h-20 m-12'>
          <input value={toValue} onChange={setToValue} className='min-h-20 border-2 mx-10 p-8' type="text" placeholder='To'/>
          <select value={to} onChange={optionChangedTo} className='mx-6 min-h-20 border-2 mx-10 p-8' name="" id="">

          {CurrencyList.map((item, index)=>{
            return <option key={index} value={item}>{item}</option>
          })}

    </select>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
