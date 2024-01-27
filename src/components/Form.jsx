import {useContext} from 'react'

import LoaderContext from '../context/LoaderContext'


const Form = ({form, setForm, amount, setAmount , phoneNumber,  setPhoneNumber, handleSubmit}) => {

  const {loading, hasPaid} = useContext(LoaderContext)
  
  return (


    <div className="w-[500px]  aspect-[10/5] m-auto relative max-sm:top-[200px] flex-1
     shadow-2xl items-center grid justify-center   max-sm:translate-x-[-15px]  rounded-2xl opacity-80">
        <p className="translate-x-[40px] font-montserrat tracking-widest text-white">Pay with <span className="text-green-400 
        font-bold"
        >Mpesa</span></p>
        <form className="flex flex-col  justify-center items-center " onSubmit={handleSubmit}>
<label className='text-white ' >Phone Number</label>
<input type="text" className="border-2 w-fit rounded-2xl outline-none  focus:text-secondary-content
 bg-transparent"  required name="phone_number"
 value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/><br /><br />
<label className='text-base-content' >Amount</label>
<input type="number" className="border-2 w-fit  rounded-2xl translate-y-[-5px] outline-none focus:text-white
 bg-transparent" 
 required value={amount} onChange={(e)=> setAmount(e.target.value)} />
<button type="submit" className="border-4 ring-2 ring-green-600   w-fit text-xs bg-gray-200
 rounded-2xl text-secondary-content"  >Pay Now</button>
<button className="text-white  text-2xl"   onClick={()=> setForm(!form)} >
x

{loading && 
<>
<p className='google-font'>validating your transaction, kindly wait......</p>
<div>

  <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
</div>
</>


}
{hasPaid && 
  <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your purchase has been confirmed!</span>
</div>}

</button>
        </form>
    </div>
  )


}

export default Form































