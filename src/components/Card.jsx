import React from 'react';
import './Card.css'

const Card = (props) => {

    return (
        <section className="card">
            <div className="album_info">
                <img src={props.image} alt={props.name} />
                <div className="info">
                    <h1>{props.artist}</h1>
                    <div>
                        <p>{props.name}</p>
                        <p>({props.year})</p>
                    </div>
                </div>
            </div>
            <div className="rating">
                <p>Rate this album</p>
                <div className="stars">
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                </div>
            </div>
        </section>
    );
};

export default Card;