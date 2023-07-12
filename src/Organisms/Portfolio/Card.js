import React from "react";
import  "./Card.css";

export default function Card(props) {
    return (
        <div className='container'>
            <img
                className='image'
                src={props.image}
                alt="image"
            />
            <h2 className='section'>{props.heading}</h2>
        </div>
    );
}
