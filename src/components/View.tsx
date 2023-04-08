import React from 'react'
import Form from './Form'
import SearchFilter from './SearchFilter'
import DisplayList from './DisplayList'


function View() {
    return (
        <div id='container' className='relative w-full min-h-[100vh]
        flex bg-[#111c2f] justify-center items-center px-8' >

            <div className="w-1/2 h-[90vh] flex p-8 justify-center">
                <Form />
            </div>

            <div className="w-1/2 h-[90vh] flex gap-8 flex-col p-8 items-center ">
                <SearchFilter />
                <DisplayList />
            </div>

        </div>

    )
}

export default View