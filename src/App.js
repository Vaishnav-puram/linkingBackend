import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
 useEffect(()=>{
  async function res(){
     let response=await axios.get('http://localhost:8000/')
     console.log(response.data)
  }
  res()
 },[])  
 let [email,setEmail]=useState('');
 let [password,setPassword]=useState('');
 console.log(email);
 console.log(password);
 async function handlePost(){
  let response=await axios.post('http://localhost:8000/test/user',{email,password})
  console.log(response.data)
 }

  return (
    <>
    <div>
      <label>name</label>
      <input type="text" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handlePost}>Login</button>
    </div>

    </>
  );
}

export default App;
