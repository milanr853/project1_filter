import React from 'react'
import Form from './Form'
import SearchFilter from './SearchFilter'
import DisplayList from './DisplayList'
import { useSelector } from 'react-redux'



function View() {
    const Data = useSelector((store: { ListReducer: { data: [] } }) => store?.ListReducer.data)
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        setState(Data)
    }, [Data])

    const filterList =
        React.useCallback(
            (query: string) => {
                const filterData = [...Data].filter(({ name }: { name: string }) => name.includes(query.toLowerCase())
                )
                setState(filterData)
            }
            , [Data]
        )


    return (
        <div id='container' className='relative w-full min-h-[100vh]
        flex bg-[#111c2f] justify-center items-center px-8' >

            <div className="w-1/2 h-[90vh] flex p-8 justify-center">
                <Form />
            </div>

            <div className="w-1/2 h-[90vh] flex gap-8 flex-col p-8 items-center ">
                <SearchFilter filterList={filterList} />
                <DisplayList data={state} />
            </div>

        </div>

    )
}

export default View