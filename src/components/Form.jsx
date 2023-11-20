




const Form = ({form, setForm, amount, setAmount , phoneNumber,  setPhoneNumber, handleSubmit}) => {
  
  return (


    <div className="w-[500px]  aspect-[10/5] m-auto relative max-sm:top-[200px] flex-1
     shadow-2xl items-center grid justify-center  bg-gray-400 max-sm:translate-x-[-15px]  rounded-2xl opacity-80">
        <p className="translate-x-[40px] font-montserrat tracking-widest">Pay with <span className="text-green-400 font-bold">Mpesa</span></p>
        <form className="flex flex-col  justify-center items-center " onSubmit={handleSubmit}>
<label >Phone Number</label>
<input type="text" className="border-2 w-fit rounded-2xl outline-none"  required name="phone_number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/><br /><br />
<label >Amount</label>
<input type="number" className="border-2 w-fit  rounded-2xl translate-y-[-5px] outline-none"  required value={amount} onChange={(e)=> setAmount(e.target.value)} />
<button type="submit" className="border-4 ring-2 ring-green-600 w-fit text-xs bg-gray-200 rounded-2xl "  >Pay Now</button>
<button className="" onClick={()=> setForm(!form)} >x</button>
        </form>
    </div>
  )


}

export default Form































