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
      console.log(res.data)
    })
    .catch((error) => {

    })
  },[])

  console.log(data)
  
  return (
    <>
    </>
   
  )
}

export default App;
