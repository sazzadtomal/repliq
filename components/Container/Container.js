import React from 'react'

const Container = ({children}) => {
  return (
    <section className="w-full lg:w-5/6 mx-auto flex-grow bg-slate-400">
      <main className='bg-white px-8 py-6 h-full' >
           {children}
        </main>
       </section>
  )
}

export default Container