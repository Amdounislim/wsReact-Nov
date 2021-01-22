import React from 'react'
import Introduction from '../Introduction/Introduction'
import ListClient from '../list/ListClient'
const Main = (props) => {
    return (
        <div>
            <Introduction />
            <ListClient arr={props.x} />
        </div>
    )
}

export default Main
