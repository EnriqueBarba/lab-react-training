import React from 'react'

const CreditCard = (props) => {

    const styles = {
        "background": `${props.bgColor}`,
        "color": `${props.color}`
    }

    return (
        <div className="CreditCard col m-2" style={styles} >
              <div>
                  <img src={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'} alt="Card firm"/>
              </div>
              <div>**** **** **** {props.number.substring(props.number.length-4,props.number.length)}</div>
              <div>
                <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
                <p>{props.owner}</p>
              </div>
        </div>
    )
}

export default CreditCard;