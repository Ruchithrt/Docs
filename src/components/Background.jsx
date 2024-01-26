import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
        <div className='w-full top-[5%] py-10 flex justify-center text-zinc-600 front-semibold font-semibold text-xl'>Documents</div>
        <h1 className=' text-zinc-900   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter'>Docs.</h1>
    </div>
    </>
  )
}

export default Background