import { useState } from "react";
import ColorArea from "./ColorArea";
import InputField from "./InputField";



function App() {
  let [colorName, setBlack] = useState('Black')
  let [hexColor, setHexColor] = useState('')
  
  function btnClick(){

    colorName = colorName==='Black' ? 'white' : 'Black'
     setBlack(colorName)
     setHexColor('')
    
  }
  const [color, setColor] = useState('')

  return (
    <div className="App">
      <ColorArea color={color} colorName ={colorName} hexColor={hexColor}/>
      <InputField color={color} setColor={setColor} hexColor={hexColor} setHexColor={setHexColor}/>
      <button className='btn btn-info ms-5 mt-3' onClick={btnClick}>Click to change the color</button>
    </div>
  );
}

export default App;
