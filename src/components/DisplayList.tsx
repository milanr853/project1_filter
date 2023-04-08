import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function DisplayList() {
    const [arr, setArr] = useState([])

    const Data = useSelector((store: { ListReducer: { data: [] } }) => store?.ListReducer.data)

    React.useEffect(() => {
        // setArr(prev=>[Data])
    }, [Data])


    return (
        <div id='scroll' className='h-[80%] w-[75%] min-w-[420px] rounded-md overflow-y-scroll scroll flex flex-col items-center items-cente '>
            {
                arr.map((e: any, index) => (
                    <div className='bg-white rounded-md p-1 flex w-9/12 mb-6 ${e == 1 && "mt-6"}' key={e}>
                        <div
                            className={`
                            ${index % 3 === 0 ? "bg-[#fef970]" : ""} ${index % 3 === 1 ? "bg-[#9decff]" : ""
                                } ${index % 3 === 2 ? "bg-white" : ""}
                        w-full h-[100px] rounded-md  flex p-3` }>

                            <div className='flex flex-col w-[50%] justify-between'>
                                <h2 className='font-semibold text-xl'>Movie name</h2>
                                <div className='font-semibold text-xl'>Rating: 8/100</div>
                            </div>

                            <div className='font-semibold text-xl flex justify-end w-[50%]'>Duration: 2.00h</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayList