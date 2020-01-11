import React from 'react'

const Greetings = (props) => {
    switch (props.lang) {
        case 'fr' :
            return(
                <div className="Greetings border-black mb-2 p-2">
                   Bonjour {props.children}
                </div>
            )
        case 'de' :
            return(
                <div className="Greetings border-black mb-2 p-2">
                   Hallo {props.children}
                </div>
            )
        case 'en' :
            return(
                <div className="Greetings border-black mb-2 p-2">
                    Hello {props.children}
                </div>
            )
        case 'es' :
            return(
                <div className="Greetings border-black mb-2 p-2">
                    Hola {props.children}
                </div>
            )
        default:
            return(
                <div className="Greetings border-black mb-2 p-2">
                    Language: "{props.lang}" is not defined
                </div>
            )
                  
    }

}

export default Greetings;