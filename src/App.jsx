import React, { useCallback, useEffect, useRef, useState } from 'react'
import Products from './Products'
import { render } from 'react-dom';

function App() {
  const [length,setLength] = useState(8); 
  const [number,setNumber] = useState(false);
  const [charactor,setCharactor] = useState(false);
  const [password,setPassword] = useState("")

  const passwordref = useRef(null)

  const passwordGenrator = useCallback ( () => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (charactor) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor (Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

      setPassword(pass)

  },[length, number,charactor,setPassword])

   const copyPasswordToClipboard = useCallback(() => {
       passwordref.current?.select()
       passwordref.current?.setSelectionRange(0,99)
       window.navigator.clipboard.writeText(password)
   },[password])

  useEffect(() => {
    passwordGenrator()
   },[length, number,charactor,passwordGenrator]);
  // var count = useRef(0); 
  // useEffect( () => {
  //   count.current = count.current + 1;
  // }); 
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        
        <h1 className='text-white text-center my-3'>Password Generator</h1>
             
              <div className="flex shadow rounded-lg overflow-hidden mb-4">
                   <input type="text"
                    value={password}
                   className="outline-none w-full py-1 px-3" placeholder="Password" readOnly
                   ref={passwordref}/>
                   <button onClick={copyPasswordToClipboard} 
                   className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
              </div>
         {/* <h1>{test}</h1> */}
         {/* <input type="text" value={test} onChange={(e) => setTest(e.target.value) }  />
         <h1>render count : {count.current}</h1> */}
      {/* <button onClick={() => setTest(test+1)} className='px-3 py-2 rounded-md bg-green-500 text-white'>click</button> */}
          <div className='flex text-sm gap-x-2'> 
                   <div className='flex items-center gap-x-1'> 
                        <input 
                        type="range" 
                        min={6} max={100} value={length} className='cursor-pointer'
                        onChange={(e) => {setLength(e.target.value)} }/>
                        <label>Length : {length}</label>
                   </div>
                   <div className='flex items-center gap-x-1'> 
                   <input 
                        type="checkbox" 
                        defaultChecked = {number}
                        id="numberInput"
                        onChange={() => {setNumber((prev) => !prev);}}/>
                        <label htmlFor="numberInput">Numbers</label>
                   </div>
                   <div className='flex items-center gap-x-1'>
                   <input 
                        type="checkbox" 
                        defaultChecked = {charactor}
                        id="charactorInput"
                        onChange={() => {setCharactor((prev) => !prev);}}/>
                        <label htmlFor="charactorInput">Charactor</label>
                   </div>
          </div>
    </div>
  )
} 

export default App


