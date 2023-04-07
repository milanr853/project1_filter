import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [rating, setRating] = useState('')
    const [duration, setDuration] = useState('')

    const handleClick = () => {
        const movieData = { name, rating, duration, id: nanoid() }
        console.log(movieData)
    }


    return (
        <div className='bg-sky-300 w-[75%] rounded-md flex flex-col items-center justify-center gap-8 min-h-[500px] min-w-[370px]'>
            <div className='w-full flex justify-center items-center'>
                <input className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Movie name' />
            </div>

            <div className='w-full flex justify-center items-center'>
                <input className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Rating' />
            </div>

            <div className='w-full flex justify-center items-center'>
                <input className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Duration' />
            </div>

            <div onClick={handleClick} className='rounded-md w-[80%] bg-[#2B3467] h-14 flex justify-center items-center text-white cursor-pointer'>
                Submit
            </div>
        </div>
    )
}

export default Form