import React from 'react'
import './ColorArea.css'
import colors from 'color-name';

function ColorArea({color, colorName,hexColor}) {
 
var a = hexColor
console.log(colors[a])

  return (
   <>
      <div className="colorarea ms-5 mt-3" style={{backgroundColor: color, color: colorName}} value={color} >{color} {colors[a]} </div>
    
   </>
  )
}

export default ColorArea