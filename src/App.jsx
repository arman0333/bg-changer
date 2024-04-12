import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full '>
    <button onClick={()=>setColor("red")} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setColor("blue")} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:"blue"}}>blue</button>
    <button onClick={()=>setColor("orange")} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:"orange"}}>orange</button>
    <button onClick={()=>setColor("purple")} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:"purple"}}>purple</button>
    <button onClick={()=>setColor("gray")} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:"gray"}}>gray</button>
    <button onClick={()=>setColor("pink")} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:"pink"}}>pink</button>
    </div>

    </div>
    </div>
    </>
    
  )
}

export default App
