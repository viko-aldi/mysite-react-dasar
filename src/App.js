// import './App.css';
// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// // import Welcome from './Welcome';
// import Home from './home';

import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // GET Data 
const [data, setData] = useState(null)
const [fetchStatus, SetFetchStatus] = useState(true)


// Create / Input Data
const [input, setInput] = useState(
  {
    name : ""
  }
)

//Create form
const handleInput = (event) => {
  let name = event.target.name
  let value = event.target.value

  if (name === "name"){
    setInput({...input, name : value})
  }
}

// create buton submit
const handleSubmit = (event) => {
  event.preventDefault()
  let {
    name
  } = input

  axios.post('https://backendexample.sanbercloud.com/api/contestants', {name})
  .then((res)=> {
    console.log(res)
    SetFetchStatus(true)
  })
  setInput({
    name: ""
  })
}

useEffect (()=>{
//   axios.get("https://backendexample.sanbercloud.com/api/contestants")
// .then((res)=> {
//   setData([...res.data])
// })
// .catch((error)=>{
  
// })
if (fetchStatus === true){
  axios.get("https://backendexample.sanbercloud.com/api/contestants")
  .then((res)=> {
    setData([...res.data])
  })
  .catch((error)=>{

  })
  SetFetchStatus(false)
}
},[fetchStatus, SetFetchStatus])


const handleDelete = (event) => {
  let idData = parseInt(event.target.value)
  axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
  .then((res)=>{
    SetFetchStatus(true)
  })
}


return (
  <>
  <div>
    <ul>
      {data !== null && data.map((res)=>{
        return (
          <>
          <li>{res.name} | &nbsp; 
          <button onClick={handleDelete} value={res.id}>Delete</button>
          </li>
          
          </>
        )
      })}
    </ul>
  </div>
  <p>FORM DATA</p>

  <form onSubmit={handleSubmit}>
    <span>Nama : </span>
    <input onChange={handleInput} value={input.name} name="name"/>
    <input type={"submit"}/>
  </form>
  </>
)
}

export default App