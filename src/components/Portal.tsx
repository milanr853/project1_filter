import React from 'react'
import { createPortal } from 'react-dom'

type Props = {
    error: string
}



function Portal({ error }: Props) {
    const portalNode: any = document.getElementById('portal')

    return createPortal(
        <div className='text-black bg-slate-500 absolute top-0'>{error}</div>
        , portalNode)
}

export default Portal