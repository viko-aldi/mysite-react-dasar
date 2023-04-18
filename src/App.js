import { useState } from 'react';
import './App.css';
// import Welcome from './Welcome';

// function App() {

const App = () =>{
  const [name, setName] = useState("John");
  const [gender, setGender] = useState('laki-laki');
  
  return (
    <div className='card'>
      {gender === "laki-laki" ? <span>Pak</span> : <span>Buk</span>}
      <span>{name}</span>
    </div>
   
  )
}

export default App;
