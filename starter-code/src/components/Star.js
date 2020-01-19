import React from 'react'

const Star = (props) => {

    const filled = "fa fa-star" 
    const hollow = "fa fa-star-o"
    //{props.type==='filled' ? filled : hollow}
    return(
        <i className={props.type==='filled' ? filled : hollow} aria-hidden="true"></i>
    )
}

export default Star