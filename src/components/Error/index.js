import React from 'react'
import {ErrorMsg} from './ErrorStyle'


function Error({msg}) {
    return (
        <ErrorMsg>{msg}</ErrorMsg>
    )
}

export default Error
