import React from 'react'

const CatFilter = ({type,data,setFilter,filter}) => {
    
    
    
    if(type==="price" && data ){
        data=data.map(option=>option.join(" - "))
    }
  
  
  
    return (

     <div className='flex text-sm md:justify-between p-1 gap-4 border border-black'>
        <p className='w-1/5'>{type.toUpperCase()}</p>
        <div className='grid grid-cols-2 flex-grow md:grid-cols-3  md:gap-2 gap-1 md:flex-grow lg:flex lg:items-center lg:whitespace-nowrap'>
            {data? data.map(option=>
            <div key={Math.random()} className='flex h-6 mb-2 lg:mb-0 gap-1 items-center md:whitespace-nowrap lg:ml-2 '>
                <input onChange={setFilter}  id={option} type='radio' name={type} value={option} checked={option===filter} />
                <label htmlFor={option}>{option.toUpperCase()}</label>
            </div>): " "}
        </div>
     </div>
  )
}

export default CatFilter