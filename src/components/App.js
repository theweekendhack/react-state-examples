import React, {useState} from 'react'
import "../assests/css/App.css"
import Celeb from './Celeb';
import FormStyle from './FormStyle';
import Numbers from './Numbers';

const App = () => {
  
  console.log("App components loads");

  const [pageStyle, setPageStyle] = useState({
    backgroundColor :"",
    color : "",
    border : ""
  })


  const [fete,setFete] = useState("Fire Fete");


  //BECAUSE THE PAGE STYLE STATE LIVES INSIDE THE APP COMPONENT!!!
  function updatePageStyle(data)
  {
    setPageStyle(data)
  }

  function changeFete()
  {
    setFete("Army Fete");
  }


  return (
    <div style={pageStyle}>
      <Numbers fete={fete}  changeFete={changeFete}/>
      <FormStyle updateStyleProp = {updatePageStyle} fete={fete} />
      <Celeb fete={fete}/>
      
    </div>
  )
}

export default App