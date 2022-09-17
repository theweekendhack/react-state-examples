import React,{useState} from 'react'

const FormStyle = ({updateStyleProp}) => 
{
    const [formData , setFormData] = useState({
        backgroundColor :"",
        color : "",
        border : ""
    })


    function hangleChange(evt)
    {
       
        const {name,value} = evt.target;


        /*
            ensure that the name of your fields match, the key names of your
            state object
        */
        setFormData({
            ...formData,
            [name]:value
        })

    }
    

    function handleClick()
    {

        updateStyleProp(formData); // THIS IS WHAT I HAVE TO DO!!! 

       
    }

    console.log("Form Style components loads");

  return ( 
    <div className='container'>
        <h2>Controlled Component(Forms)</h2>
        <form>
            <div>
                <label> Background Color</label>
                <input type="text" id="backgroundColor" name="backgroundColor" value={formData.backgroundColor} onChange={hangleChange} />
            </div>

            <div>
                <label>Color of Text</label>
                <input type="text" id="color" name="color"  value={formData.color} onChange={hangleChange}/>
            </div>

            <div>
                <label>Border  </label>
                <input type="text" id="border" name="border"  value={formData.border} onChange={hangleChange}/>
            </div>

            <button type="button" onClick={handleClick}> Apply Style</button>

        </form>
  </div>
  )
}

export default FormStyle