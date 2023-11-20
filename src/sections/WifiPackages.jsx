import { useRef } from "react"
import WifiPackageCards from "../components/WifiPackageCards"






const WifiPackages = ({form, setForm,  amount, setAmount , phoneNumber,  setPhoneNumber, handleSubmit}) => {
  return (

<section >
<div className=" mt-11  w-full h-[630px]">

<p className="text-center font-montserrat text-xl">Wifi Packages</p>

    <WifiPackageCards form={form} setForm={setForm} useRef={useRef} amount={amount} setAmount={setAmount} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} 
    handleSubmit={handleSubmit}
     />
</div>

</section>    )
}

export default WifiPackages














