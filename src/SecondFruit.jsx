import {useContext} from 'react'

import {FruitContext}  from './App'






const SecondFruit = () => {



const {fruit, setFruit} = useContext(FruitContext);

  return (
    <div  className='h-screen text-black '>
      
<p className='text-black'>
  Fruit: {fruit}
</p>

      <div className='space-x-20'>
      <button  className='border-2 border-blue-800 p-1' onClick={()=> setFruit('apple')}>Apple</button>
      <button  className='border-2 border-blue-800 p-1'   onClick={()=> setFruit('banana')}>Banana</button>
      </div>
      
      </div>

  )
}

export default SecondFruit
