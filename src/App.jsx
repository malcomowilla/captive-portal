
import {HomePage, WifiPackages} from '../src/constants/index'
import { useState, useRef, useEffect } from 'react'
import LoaderContext from '../src/context/LoaderContext'
function App() {
const [form, setForm] = useState(false)
const [amount, setAmount] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const [hasPaid, sethasPaid] = useState(false)

const formData = {amount:amount,  phone_number:phoneNumber}
console.log(formData)

const handleSubmit = async (e)=> {
  e.preventDefault()
  try {
    setLoading(true)
    sethasPaid(false)
    let res = await fetch('https://captive-portal5.onrender.com/stk_push', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)

    })

    let data = await res.json()
if (res.status === 200) {
  setError(false)
  console.log(data)
  setLoading(false)
  sethasPaid(true)
  setPhoneNumber('')
  setAmount('')
  
  
} else {
  setError(true)
  sethasPaid(false)

}
  } catch (error) {
    setError('An error occured please try again')
    setLoading(false)

    console.log(error)
  }
}
useEffect(()=> {

}, [amount, phoneNumber])






  return (
<main>
<LoaderContext.Provider value={{loading, hasPaid, error}}>

<section className=''>
  <HomePage/>
</section>

<section className='translate-y-[190px] md:h-full' >
<WifiPackages form={form} setForm={setForm}  useRef={useRef}  amount={amount} setAmount={setAmount} 
 phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber}
  handleSubmit={handleSubmit}/>

</section>
</LoaderContext.Provider>

</main>
  )
}

export default App









