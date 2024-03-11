import React from 'react'
// import colorNames from 'colorname'

function InputField({color, setColor, setHexColor}) {
  let getHexaColor=(e)=>{
    console.log(e.target.value)
    setHexColor(e.target.value)
  }

  return (
    <>
      <input type="text" className='mt-4 ms-5' placeholder='Enter Color Name' value={color}  onChange={(e)=>{ setColor(e.target.value); getHexaColor(e)}} /> <br />

      
    </>
  )
}

export default InputField