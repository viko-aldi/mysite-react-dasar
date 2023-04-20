import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Welcome from './Welcome';
import Home from './home';

import axios from 'axios';
import { useState } from 'react';

const App = () =>{


  const [data, setData] = useState(null)

  useState(() => {
    axios.get('https://backendexample.sanbercloud.com/api/contestants')
    .then((res) => {
      setData([...res.data])
    })
    .catch((error) => {

    })
  },[])

  // console.log(data)
  
  return (
    <>
    <ul>
      { data !== null && data.map((res) =>{
        return(
          <>
          <li>
            {res.name}
          </li>
          </>
        )
      })}
      
    </ul>
    </>
   
  )
}

export default App;


// import React, { useState} from "react";

// const App = () =>{
//   const [input, setInput] = useState(
//     {
//       name : "",
//       hobby : ""
//     }
//   )
//   const handleInput = (event) => {
//     let name = event.target.name
//     let value = event.target.value

//     if ( name == "name"){
//       setInput({...input, name : value})
//     } else if( name === "hobby"){
//       setInput({...input, value : value})
//     }
//   }
//   return (
//     <>
//     <p>Belajar Handling input</p>
//     <input onChange={handleInput} value={input.name} type="text" name="name"/>
//     <br/>
//     <input onChange={handleInput} value={input.hobby} type="text" />
//     </>
//   )
// }

// export default App