
import {HomePage, WifiPackages} from '../src/constants/index'
import { useState, useRef, useEffect } from 'react'

function App() {
const [form, setForm] = useState(false)
const [amount, setAmount] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)

const formData = {amount:amount,  phoneNumber:phoneNumber}
console.log(formData)

const handleSubmit = async (e)=> {
  e.preventDefault()
  try {
    let res = await fetch('https://captive-portal5.onrender.com/stk_push', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)

    })

    let data = await res.json()
if (res.status === 200) {
  setError(null)
  console.log(data)
} else {
  setError('Something went wrong please try again')
}
  } catch (error) {
    setError('An error occured please try again')

    console.log(error)
  }
}
useEffect(()=> {

}, [amount, phoneNumber])






  return (
<main>
<section className=''>
  <HomePage/>
</section>

<section className='translate-y-[190px]'>
<WifiPackages form={form} setForm={setForm}  useRef={useRef}  amount={amount} setAmount={setAmount}  phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber}
  handleSubmit={handleSubmit}/>
</section>
</main>
  )
}

export default App









