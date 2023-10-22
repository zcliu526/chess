import React from 'react'

function Square({value, onClick, index}) {

    
    return (
        <>
            Test
            <div className="square" onClick={() => { onClick(index) }}>{value}</div>
        </>

    )
}

export default Square;