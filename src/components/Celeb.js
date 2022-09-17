import React,{useState} from 'react';
import nickiImg from "../assests/img/nicki.jpeg";
import ririImg from "../assests/img/rihanna.jpeg";
const Celeb = () => {

  console.log("Celeb components loads");

  //create the celeb state
  const [celeb, setCeleb] = useState({
    title:"Nicki Minaj",
    image : nickiImg
  })


  function changeToNicki()
  {

     setCeleb({
      title:"Nicki Minaj",
      image : nickiImg
    })
  }

  function changeToRiRi()
  {
    setCeleb({
      title:"Rihanna",
      image : ririImg
    })

  }
  return (
    <div className='container'>
        <h2>Celeb : {celeb.title}</h2>
        <img src={celeb.image} alt={celeb.title} onMouseOver={changeToRiRi} onMouseOut={changeToNicki} />
    </div>

  )
}

export default Celeb