import React from 'react'
import Form from './Form'
import SearchFilter from './SearchFilter'
import DisplayList from './DisplayList'

function View() {
    return (
        <div id='container' className='w-9/12 h-[90vh] 
        absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
        flex' >
            <div className="w-1/2 h-full flex p-8 ">
                <Form />
            </div>

            <div className="w-1/2 h-full flex gap-8 flex-col p-8 ">
                <SearchFilter />
                <DisplayList />
            </div>
        </div>
    )
}

export default View