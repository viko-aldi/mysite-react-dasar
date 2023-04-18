import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Welcome from './Welcome';
import Home from './home';

const App = () =>{
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
   
  )
}

export default App;
