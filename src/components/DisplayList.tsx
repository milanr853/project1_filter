import React, { useState } from 'react'
import { capitalize } from '../utilities/functions'
import { useDispatch } from 'react-redux/'
import { removeItem } from '../redux/ListSlice'


type PropTypes = {
    data?: Array<{ name: string, duration: any, rating: string, id: string }>
}

function DisplayList({ data = [] }: PropTypes) {
    const dispatch = useDispatch()

    const handleDoubleClick = (id: string) => {
        console.log('dcled')
        dispatch(removeItem(id))
    }



    return (
        <div id='scroll' className='h-[80%] w-[75%] min-w-[420px] rounded-md overflow-y-scroll scroll flex flex-col items-center items-cente '>
            {
                data
                    .map(({ name, duration, rating, id }: any, index: number) => (
                        <div className='bg-white rounded-md p-1 flex w-9/12 mb-6 ${e == 1 && "mt-6"} relative' key={id} >
                            <div
                                className={`
                            ${index % 3 === 0 ? "bg-[#fef970]" : ""} ${index % 3 === 1 ? "bg-[#9decff]" : ""
                                    } ${index % 3 === 2 ? "bg-white" : ""}
                        w-full h-[100px] rounded-md  flex p-3` }>

                                <div className='flex flex-col w-[50%] justify-between'>
                                    <h2 className='font-semibold text-xl'>{name.length <= 8 ? capitalize(name) :
                                        capitalize(name.slice(0, 8)) + "..."
                                    }</h2>
                                    <div className='font-semibold text-xl'>Rating: {rating}/100</div>
                                </div>

                                <div className='font-semibold text-xl flex justify-end w-[50%]'>Duration: {duration}h</div>
                            </div>

                            <div className="absolute w-full h-full top-0 left-0 cursor-pointer" onDoubleClick={() => handleDoubleClick(id)}></div>
                        </div>
                    ))
            }
        </div>
    )
}

export default DisplayList