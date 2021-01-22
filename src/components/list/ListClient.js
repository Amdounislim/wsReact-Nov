import React from 'react'
import Card from '../card/Card'

const ListClient = ({arr}) => {
    return (
        <div style={{display:"flex"}}>
            {arr.map((el, i)=><Card user={el} />)}
        </div>
    )
}

export default ListClient
