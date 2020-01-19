import React from 'react'
import Star from './Star'

const Rating = (props) => {
const result = []
//debugger
const num = Math.round(Number(props.children))
let i = 0;
let j = 0;        
for (i; i<num; i++){
    result.push(<Star key={i} type="filled"/>)
}
const hollowStars = 5 - result.length;

for (j=0; j<hollowStars; j++){
    result.push(<Star key={j+i} type="hollow"/>)
}

    return (
        <div className="Rating">
            {result}
        </div>
    )
}

export default Rating