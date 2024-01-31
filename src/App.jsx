import OneSignal from 'react-onesignal';

import {HomePage, WifiPackages} from '../src/constants/index'

import { useState,  useEffect } from 'react'
import LoaderContext from '../src/context/LoaderContext'
function App() {
const [form, setForm] = useState(false)
const [amount, setAmount] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const [hasPaid, sethasPaid] = useState(false)
const [form2, setForm2] = useState(false)
const [amount2, setAmount2] = useState('')
const [phoneNumber2, setPhoneNumber2] = useState('')
const [amount3, setAmount3] = useState('')
const [phoneNumber3, setPhoneNumber3] = useState('')
const [form3, setForm3] = useState(false)

const formData = {amount:20,  phone_number:phoneNumber}
const formData2 = {amount:30,  phone_number:phoneNumber2}
const formData3 = {amount:50,  phone_number:phoneNumber3}


// console.log(formData)


console.log(formData2)
console.log(formData3)


useEffect(() => {
OneSignal.init({
  appId: "2df033aa-8ce1-48bc-b8ad-af4915a86470"

})
}, []);

// https://captive-portal5.onrender.com/stk_push
// http://localhost:3000

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









const handleSubmit2 = async (e)=> {
  e.preventDefault()
  try {
    setLoading(true)
    sethasPaid(false)
    let res = await fetch('https://captive-portal5.onrender.com/stk_push', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData2)

    })


    

    let data = await res.json()
if (res.status === 200) {
  setError(false)
  console.log(data)
  setLoading(false)
  sethasPaid(true)
  setPhoneNumber2('')
  setAmount2('')
  
  
} else {
  setError(true)
  sethasPaid(false)

}
  } catch (error) {
    setError(true)
    setLoading(false)

    console.log(error)
  }
}
useEffect(()=> {

}, [amount2, phoneNumber2])








const handleSubmit3 = async (e)=> {
  e.preventDefault()
  try {
    setLoading(true)
    sethasPaid(false)
    let res = await fetch('https://captive-portal5.onrender.com/stk_push', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData3)

    })


    

    let data = await res.json()
if (res.status === 200) {
  setError(false)
  console.log(data)
  setLoading(false)
  sethasPaid(true)
  setPhoneNumber3('')
  setAmount3('')
  
  
} else {
  setError(true)
  sethasPaid(false)

}
  } catch (error) {
    setError(true)
    setLoading(false)

    console.log(error)
  }
}
useEffect(()=> {

}, [amount3, phoneNumber3])



  return (
<main>
<LoaderContext.Provider value={{loading, hasPaid, error, form, setForm, handleSubmit, phoneNumber, setPhoneNumber,
    setError, form2, setForm2, handleSubmit2,  phoneNumber2, setPhoneNumber2, sethasPaid,
    handleSubmit3, phoneNumber3, setPhoneNumber3, form3, setForm3}}>

<section className=''>
  <HomePage/>
</section>

<section className='translate-y-[190px] md:h-full' >
<WifiPackages    
 
  />

</section>
</LoaderContext.Provider>

</main>
  )
}

export default App









