import React from 'react'
import "../Content.css"



function Card(props) {


    return (
        <div>
            <div className="term">
                <dt> <h2 > <a className="heading" href={`${props.url1}`}>{props.fullname}</a></h2>
                    <img className="circle-img" src={props.imag} alt="avatar_img" />



                </dt>
                <dd>{props.description1}</dd>
                <span>{props.fulltime}</span>

            </div>
        </div >
    )
}
export default Card;