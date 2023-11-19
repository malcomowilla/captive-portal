
import { routerImage } from "../constants/image"
import {motion} from 'framer-motion'
import { useState } from "react"


const HomePage = () => {
    const [rotate, setRotate] = useState(false)
  return (
<>

<motion.section  whileInView={{opacity: 1}} initial={{opacity: 0}}  transition={{type: 'tween', duration: 4}} className="lg:max-w-full  h-96  relative ">

<div className="bg-wifi h-96  space-x-[80px]  bg-cover bg-center filter contrast-[100%]
 bg-no-repeat  grid-auto-fit grid" >

<div className=" w-fit h-fit   ml-[100px] mt-[50px]">
<motion.p whileHover={{scale: 1.5}} className="text-xl font-thin ">Providing Finest<br/>
     <span className=" lg:font-bold text-4xl max-sm:text-2xl max-sm:font-semibold">Internet Services</span></motion.p>

</div>



<motion.div    animate={{rotate:rotate ? '360deg' : '0deg'}}   transition={{type: 'tween', duration: 5, }} onClick={()=> setRotate(!rotate)}  className=" object-contain  h-fit w-fit  z-30 mix-blend-multiply">
<motion.img  src={routerImage} dragConstraints={{top: 20, left: 40, right: 40, bottom: 20}} className=" mix-blend-multiply " drag />
</motion.div>



</div>

    
</motion.section>


</>



  )
}





















export default HomePage















