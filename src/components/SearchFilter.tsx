import React, { ChangeEvent, useState } from 'react'

function SearchFilter() {
    const [state, setState] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }


    return (
        <div className='h-[20%] flex justify-center items-center rounded-md '>
            <div className='w-10/12 rounded-lg bg-white p-1'>
                <input value={state} className='h-12 w-full p-4 rounded-lg outline-none bg-slate-200' placeholder='Search' type="text" onChange={handleChange} />
            </div>
        </div>
    )
}

export default SearchFilter