import React from 'react'

const BoxColor = (props) => {
    console.log(props)
    const styles = {
        "background-color": `rgb(${props.r},${props.g},${props.b})`
    }
    return (
        <div className="BoxColor border-black mb-2 text-center" style={styles}>
            <p>rgb({props.r},{props.g},{props.b})</p>            
        </div>
    )
}

export default BoxColor;