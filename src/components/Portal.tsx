import React from 'react'
import { createPortal } from 'react-dom'





function Portal() {
    const portalNode: any = document.getElementById('portal')

    return createPortal(
        <div className='text-black bg-slate-500 absolute top-0'>Portal</div>
        , portalNode)
}

export default Portal