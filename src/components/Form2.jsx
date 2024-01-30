import {useContext} from 'react'

import LoaderContext from '../context/LoaderContext'


const Form2 = () => {
    const {loading, hasPaid, error, form2, setForm2, phoneNumber2,  setPhoneNumber2,
        handleSubmit2, sethasPaid, setError} = useContext(LoaderContext)
        
  return (
    <div className="w-[500px]  aspect-[10/5] m-auto relative  max-sm:top-[200px] flex-1
    shadow-2xl items-center grid justify-center   max-sm:translate-x-[-15px]  rounded-2xl opacity-80">
       <p className="translate-x-[40px] font-montserrat tracking-widest text-white">Pay with <span className="text-green-400 
       font-bold"
       >Mpesa</span></p>
       <form className="flex flex-col  justify-center items-center " onSubmit={handleSubmit2}>
<label className='text-white ' >Phone Number</label>
<input type="text" className="border-2 w-fit rounded-2xl outline-none  focus:neutral-content
bg-transparent"  required name="phone_number"
value={phoneNumber2} onChange={(e)=> setPhoneNumber2(e.target.value)}/><br /><br />

<button type="submit" className="border-4 ring-2 ring-green-600   w-fit text-xs bg-gray-200
rounded-2xl text-secondary-content"  >Pay Now</button>
<button className="text-white  text-2xl"   onClick={()=> setForm2(!form2)} >
x

</button>



{loading && 
<>
<p className='google-font max-sm:text-lg lg:text-4xl'>tulia mpesa ikuulizie pin number on your phone......</p>
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

{error &&  <>
 <div   onClick={()=>setError(!error) } role="alert" className="alert alert-error">
 <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 <span>Tulia kidogo, kuna shida mahali....</span>
</div>

</>}


{hasPaid && 

 <div  onClick={()=>sethasPaid(!hasPaid) } role="alert" className="alert alert-success">
 <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6"
  fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 <span>confirm kwa simu your mpesa pin!</span>
</div>}




       </form>
   </div>

  )
}

export default Form2