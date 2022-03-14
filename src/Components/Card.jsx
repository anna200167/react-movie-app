import React from 'react'



function Card(props) {

    return(
        <div className='contain'>
        <div className="container">
        <div className="card">
            <div className="card-img">
                <img src={props.imgsrc}  alt="img"/>
            </div>
                <div className="card-content">
                <h2 className="big-title">{props.Title}</h2>
                <h3 className="medium-title">{props.Released}</h3>
                <h3 className="medium-title">Ratings:{props.imdbRating}</h3>

            </div>
        </div>
        </div>
        </div>
    )

}

export default Card;