import React from 'react'

const Random = ({min,max}) =>{
    return (
        <div className="Random border-black mb-2 p-2">
            <span>Random value between {min} and {max} => {Math.round(Math.random() * (max - min) + min)}</span>    
        </div>
    )
}

export default Random