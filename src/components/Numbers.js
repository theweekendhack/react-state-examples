import React,{useState} from 'react'

const Numbers = () => {

    console.log("Numbers components loads");

    const [number, setNumbers ]= useState(0);

    function incrementNumberByOne()
    { 
        setNumbers(number+1); 
        
    }


  return (
    <div id="numberClicked">

        <h1>Number of times I clicked : {number}</h1>

        <button onClick={incrementNumberByOne}>Press Me</button>
    </div>
  )
}

export default Numbers