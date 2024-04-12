import React from 'react'

function Btn({colors,onClick}) {
  return (
    
    <button onClick={()=>onClick(colors)} className='text-white p-2 rounded-full shadow-lg border-white' style={{backgroundColor:colors}}>{colors}</button>
  )
}

export default Btn