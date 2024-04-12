import { useState } from 'react'
import Btn from './components/Btn';
function App() {
  const [color, setColor] = useState("olive");
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
    
     <div className='flex flex-wrap justify-center gap-6 shadow-lg bg-white px-3 py-2 rounded-full '>
    <Btn colors ="red" onClick={changeColor}/>
    <Btn colors ="blue" onClick={changeColor}/>
    <Btn colors ="purple" onClick={changeColor}/>
    <Btn colors ="gray" onClick={changeColor}/>
    <Btn colors ="yellow" onClick={changeColor}/>
    <Btn colors ="green" onClick={changeColor}/>
    <Btn colors ="black" onClick={changeColor}/>
    <Btn colors ="lavender" onClick={changeColor}/>
    <Btn colors ="pink" onClick={changeColor}/>

    </div>

    </div>
    </div>
    </>
    
  )
}

export default App
