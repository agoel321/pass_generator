import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {

  const [length,setLength]=useState("8");
  const [number,setNumber]=useState(false);
  const [password,setPassword]=useState("");
  const [character,setCharacter]=useState(false);
  const passwordRef=useRef(null)
  
  const copypassword=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    

  },[password])
  const Passwordgenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789"
    if(character) str+="!@#$%^&*(){}[]"
    for (let index = 1; index < length; index++) {
      let num=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(num);
      
    }
    setPassword(pass);

  },[length,number,character])
  useEffect(()=>{
    Passwordgenerator()


  },[length,number,character])


  return (

    <div className="bg-black h-screen w-full flex place-content-center">
      <div className="h-2/6 w-4/12 rounded-xl  flex flex-col gap-3 align items-center place-content-center bg-slate-600 text-orange-400">
        <div><h1 className="text-4xl text-black">Password Generator</h1></div>
        <div className='flex place-content-center gap-2 p-3'>
          <label>Password:</label><input type="text" value={password} ref={passwordRef} onChange={()=>{Passwordgenerator}} readOnly placeholder='Enter the text' />
          <button className="bg-blue-700 rounded-md p-1 shadow-sm " onClick={copypassword}>copy</button>

        </div>
        <div className="flex gap-2">
          <input type="range" min={0} max={20} value={length} onChange={(e)=>setLength(e.target.value)} /><label>Length:{length}</label>
          <input type="checkbox" defaultChecked={number} onChange={()=>setNumber((prev)=>!prev)}/><label>Number</label>
          <input type="checkbox" defaultChecked={character} onChange={()=>setCharacter((prev)=>!prev)}/><label>Character</label>
          

          </div>

      </div>

      </div>


      )
}

      export default App
