
import { routerImage } from "../constants/image"
import {motion} from 'framer-motion'
import { useState } from "react"


const HomePage = () => {
    const [rotate, setRotate] = useState(false)
  return (
<>

<motion.section  whileInView={{opacity: 1}} initial={{opacity: 0}}  transition={{type: 'tween', duration: 4}}
 className="lg:max-w-full  h-96  relative ">

<div className="bg-wifi  md:bg-wifi  h-96  space-x-[80px]  bg-cover bg-center filter contrast-[100%]
 bg-no-repeat  grid-auto-fit grid" >

<div className=" w-fit h-fit   ml-[100px] mt-[50px]  text-primary-content">
  <p className='text-8xl font-thin  google-font duration-300 '>Fibre 8</p><br /><br />
<motion.p whileHover={{scale: 1.5}} className="text-4xl font-thin  google-font duration-300">Providing Finest<br/>
     <span className=" lg:font-bold text-4xl lg:text-6xl md:font-semibold">Internet Services</span></motion.p>

</div>



<motion.div    
 onClick={()=> setRotate(!rotate)}  className="object-contain  h-fit w-fit  z-30 mix-blend-multiply">
<motion.img  src={routerImage}  alt='router-image' initial={{
  opacity: 0,
  y: -900
}}

animate={{
  opacity: 1,
  y:0
}}

transition={{
  ease: 'easeIn',
  duration: 3
}}


 className="mix-blend-multiply  h-fit w-fit"  />
</motion.div>



</div>

    
</motion.section>


</>



  )
}





















export default HomePage















