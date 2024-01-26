

import Form from './Form'

import Lottie from "lottie-react"
import wifi from '../assets/wifi.json'

const WifiPackageCards = ({form, setForm, amount, setAmount , phoneNumber,  setPhoneNumber, handleSubmit }) => {



  const handleForm = ()=> {
    setForm(!form)



    // sectionElement.current.classList.toggle('opacity-0')
    // sectionElement.current.classList.toggle('translate-y-[500px]');

    

  
  }
  return (

    <div className="w-full h-96 grid grid-auto-fit  gap-10 mt-[70px] translate-x-5 " >
      


     <div className="shadow-2xl w-5/6 h-[300px] grid grid-auto-fit bg-orange-600 rounded-2xl" >
<div className='max-sm:translate-y-[-100px]'>
<Lottie   animationData={wifi} className=' md:translate-y-[-80px]  lg:translate-y-[-140px]   w-full  ' />


</div>

<div className='lg:translate-y-[-350px]   md:translate-y-[-200px]   
shadow-2xl bg-white  max-sm:translate-y-[-280px]
w-[150px] h-20 flex flex-col justify-center items-center relative z-40 bottom-9 m-auto  '>

<h1 className='text-sm text-cyan-300 font-serif font-bold '>Basic</h1>
<hr className='border-2 w-20 mx-auto border-gray-300'/>
<p className='text-xs font-montserrat'> <span className='text-4xl text-cyan-300'>4</span> mbs  <br />unlimited traffic</p>
</div>

<div className='w-full flex justify-center flex-col md:translate-y-[-390px] lg:translate-y-[-550px] max-sm:translate-y-[70px]'>
<p className='   md:translate-y-[190px]  translate-y-[-350px]  
 text-sm w-auto m-auto font-montserrat font-semibold hover:text-4xl duration-300'>20 bob</p>
<button className={` md:translate-y-[190px]   translate-y-[-350px]  sm:translate-y-[-240px]   border-2 w-[80px]
 h-8 text-sm mx-auto rounded-lg ring-cyan-200 ring-2 hover:ring-black



` } onClick={handleForm}>buy now</button>
        </div>



        </div>

        




        <div className="shadow-2xl    w-5/6 h-[300px] bg-black rounded-2xl" >

        <Lottie   animationData={wifi} className=' md:translate-y-[-70px]   sm:translate-y-[-120px] 
         lg:translate-y-[-140px] w-full  max-sm:w-full max-sm:translate-y-[-100px]' />

<div className=' md:translate-y-[-180px]    lg:translate-y-[-350px]  sm:translate-y-[-120px]  
  shadow-2xl bg-white w-[150px] h-20 flex flex-col justify-center items-center relative 
  z-40 bottom-9 m-auto  max-sm:translate-y-[-300px] '>

<h1 className='text-sm text-cyan-300 font-serif font-bold'>Platinum</h1>
<hr className='border-2 w-20 mx-auto border-gray-300'/>
<p className='text-xs font-montserrat'> <span className='text-4xl text-cyan-300'>5</span> mbs  <br />unlimited traffic</p>
</div >

<div className='sm:translate-y-[200px] lg:translate-y-[-150px] max-sm:translate-y-[-100px]'>

<div className='w-full flex justify-center'>

<p className=' md:translate-y-[-120px]    lg:translate-y-[-190px]  
  text-sm w-auto  font-montserrat font-semibold hover:text-4xl duration-300 text-white'>30 bob</p>


</div>

<div className='w-full flex'>
  
  <button className='   md:translate-y-[-190px]    translate-y-[-350px] 
   max-sm:translate-y-[-240px]   border-2 w-[80px] h-8 text-sm mx-auto rounded-lg ring-cyan-200
    ring-2 hover:ring-black  text-white' onClick={handleForm}>buy now</button>
</div>

        </div>

        </div>



        
        <div className="shadow-2xl bg-yellow-300 rounded-2xl w-5/6 h-[300px]" >




        <Lottie   animationData={wifi} className=' md:translate-y-[-50px]  
           max-sm:translate-y-[-130px]    lg:translate-y-[-140px] w-full  max-sm:w-full ' />

<div className='md:translate-y-[-150px]     lg:translate-y-[-350px]     max-sm:translate-y-[-280px]  
 shadow-2xl bg-white w-[150px] h-20 flex flex-col justify-center items-center relative z-40 bottom-9 m-auto '>

<h1 className='text-sm text-cyan-300 font-serif font-bold'>Premium</h1>
<hr className='border-2 w-20 mx-auto border-gray-300'/>
<p className='    text-xs font-montserrat'> <span className='text-4xl text-cyan-300'>10</span> mbs  <br />unlimited traffic</p>
</div>


<div className='md:translate-y-[200px] lg:translate-y-[-10px]'>
<div className='w-full flex justify-center'>

<p className='max-md:translate-y-[-100px]  translate-y-[-350px] max-sm:translate-y-[-250px] text-sm w-auto
  font-montserrat font-semibold hover:text-4xl duration-300'>50 bob</p>


</div>
<div className='w-full flex '>
  <button className=' max-md:translate-y-[-170px] translate-y-[-350px] max-sm:translate-y-[-240px]
    border-2 w-[80px] h-8 text-sm mx-auto
     rounded-lg ring-cyan-200 ring-2 hover:ring-black' 
      onClick={handleForm}>buy now</button>
</div>


        </div>
        </div>
      
      {/* <section          
 className='w-screen  border-4 backdrop-blur-md relative bottom-[400px]  grid grid-auto-fit z-50 h-[500px] translate-x-[-13px]  
  '
      
      >
      {form && <Form  form={form} setForm={setForm}/>}  
      </section>
       */}


{form && (
        <>
          <div className="fixed translate-x-[-15px] max-sm:absolute max-sm:h-screen  
           inset-0 h-screen bg-black bg-opacity-50 backdrop-blur-lg z-50 
           w-screen" ></div>
          <section className="absolute w-screen max-sm:flex  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
            <Form form={form} setForm={setForm}   amount={amount} setAmount={setAmount}  phoneNumber={phoneNumber} 
             setPhoneNumber={setPhoneNumber} handleSubmit={handleSubmit} />
          </section>
        </>
      )}
        </div>

  )

  
}

export default WifiPackageCards