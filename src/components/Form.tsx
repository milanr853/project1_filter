import { nanoid } from '@reduxjs/toolkit'
import React, { ChangeEvent, useState } from 'react'
import { capitalize } from '../utilities/functions'
import Portal from './Portal'
import { addNewItem } from '../redux/ListSlice'
import { useDispatch } from 'react-redux/es/exports'


function Form() {
    //local states
    const [name, setName] = useState('')
    const [rating, setRating] = useState<string>('')
    const [duration, setDuration] = useState('')
    const [error, setError] = useState<string>('')

    const dispatch = useDispatch()

    function clearStates() {
        setName('')
        setRating('')
        setDuration('')
    }

    const handleClick = () => {
        if (!name) setError('name cannot be empty')
        else if (!rating.length) setError('rating cannot be empty or non numeric')
        else if (rating === '0') setError('rating cannot be 0')
        else if (!duration) setError('duration cannot be empty')

        else {
            const checks = duration.split(/[hm]/)
            let hDur;
            if (checks.length === 2 && checks[0]) {
                if (duration.includes('m')) {
                    hDur = (Number(checks[0]) / 60).toFixed(2)
                }
                else if (duration.includes('h')) {
                    hDur = checks[0]
                }
                const movieData = { name, rating, duration: hDur, id: nanoid() }
                //submit 
                dispatch(addNewItem(movieData))
                clearStates()
            }
            else setError('Duration format: 2h or 132')
        }
    }

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value.toLowerCase()); setError('') }

    const rateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val: any = e.target.value
        if (/^\d*$/.test(val)) { setRating(val > 100 ? '100' : val); setError('') }
    }

    const durationChange = (e: ChangeEvent<HTMLInputElement>) => { setDuration(e.target.value); setError('') }


    return (
        <div className='bg-sky-300 w-[75%] rounded-md flex flex-col items-center justify-center gap-8 min-h-[500px] min-w-[370px]'>
            <div className='w-full flex justify-center items-center'>
                <input value={capitalize(name)} className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Movie name' onChange={nameChange} />
            </div>

            <div className='w-full flex justify-center items-center'>
                <input value={rating} min={1} max={100} className='h-14 rounded-md p-4 w-[80%]' type="number" placeholder='Provide rating within 1 to 100' onChange={rateChange} />
            </div>

            <div className='w-full flex justify-center items-center'>
                <input value={duration} className='h-14 rounded-md p-4 w-[80%]' type="text" placeholder='Duration ex:(2h or 132m)' onChange={durationChange} />
            </div>

            <div onClick={handleClick} className='rounded-md w-[80%] bg-[#2B3467] h-14 flex justify-center items-center text-white cursor-pointer'>
                Submit
            </div>

            <Portal error={error} />
        </div>
    )
}

export default React.memo(Form)