import React from 'react'

function Form() {
    return (
        <div className='bg-sky-300 w-full rounded-md flex flex-col items-center justify-center gap-8'>
            <div className='w-full flex justify-center items-center'>
                <input className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Movie name' />
            </div>

            <div className='w-full flex justify-center items-center'>
                <input className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Rating' />
            </div>

            <div className='w-full flex justify-center items-center'>
                <input className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Duration' />
            </div>

            <div className='rounded-md w-[80%] bg-[#2B3467] h-14 flex justify-center items-center text-white cursor-pointer'>
                Submit
            </div>
        </div>
    )
}

export default Form