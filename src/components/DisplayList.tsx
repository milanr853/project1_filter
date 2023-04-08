import React, { useState } from 'react'
import { capitalize } from '../utilities/functions'


type PropTypes = {
    data?: Array<Object>
}

function DisplayList({ data = [] }: PropTypes) {



    return (
        <div id='scroll' className='h-[80%] w-[75%] min-w-[420px] rounded-md overflow-y-scroll scroll flex flex-col items-center items-cente '>
            {
                data.map(({ name, duration, rating, id }: any, index: number) => (
                    <div className='bg-white rounded-md p-1 flex w-9/12 mb-6 ${e == 1 && "mt-6"}' key={id}>
                        <div
                            className={`
                            ${index % 3 === 0 ? "bg-[#fef970]" : ""} ${index % 3 === 1 ? "bg-[#9decff]" : ""
                                } ${index % 3 === 2 ? "bg-white" : ""}
                        w-full h-[100px] rounded-md  flex p-3` }>

                            <div className='flex flex-col w-[50%] justify-between'>
                                <h2 className='font-semibold text-xl'>{capitalize(name)}</h2>
                                <div className='font-semibold text-xl'>Rating: {rating}/100</div>
                            </div>

                            <div className='font-semibold text-xl flex justify-end w-[50%]'>Duration: {duration}h</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayList