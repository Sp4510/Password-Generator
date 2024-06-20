import React, { useState } from 'react'

function Products() {
    const [a,b] = useState(false)
  return (
    <div className='w-full h-60 bg-zinc-600 text-white p-10'>
            <h4 className={'${ a === false ? "text-red-600" : "text-blue-600"}'}>{ a === false ? "hello" :"hey"}</h4>
            <button onClick={() => b(!a)}>click</button>
    </div>
  )
}

export default Products