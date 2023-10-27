import React from 'react'

const Page = (params) => {
  return (
    <div>
        <h1 className='mt-[20px] text-5xl text-center font-mono font-semibold'>
            You are in <span className='text-green-500'>{params.params.name}</span>
        </h1>
    </div>
  )
}

export default Page