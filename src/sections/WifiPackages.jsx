import { useRef } from "react"
import WifiPackageCards from "../components/WifiPackageCards"






const WifiPackages = ({form, setForm,  amount, setAmount , phoneNumber,  setPhoneNumber, handleSubmit}) => {
  return (

<section className=''  >
<div className=" mt-11  w-full h-[630px]">

<p className="text-center  lg:text-5xl  md:text-3xl  sm:text-xl google-font text-primary-content ">Wifi Packages</p>

    <WifiPackageCards form={form} setForm={setForm}
     useRef={useRef} amount={amount} setAmount={setAmount} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} 
    handleSubmit={handleSubmit}
     />
</div>

</section>    )
}

export default WifiPackages














