import React from 'react'


const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}) => {
    return (
        <div className="IdCard mb-2 p-3 border-black">
            <div className="row">
                <div className="col col-2">
                    <img src={picture} alt="IdCard"/>
                </div>
                <div className="col col-10">
                    <strong>First name:</strong> {firstName}<br/>
                    <strong>Last name:</strong> {lastName}<br/>
                    <strong>Gender:</strong> {gender}<br/>
                    <strong>Height:</strong> {height}<br/>
                    <strong>Birth:</strong> {birth.toDateString()}
                </div>
            </div>
        </div>
    )
}

export default IdCard