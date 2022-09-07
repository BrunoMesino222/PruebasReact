import React from "react";
import "../Styles/Card.css";

function Card(props) {
    return (
        <div className="cont-card">
            <img
            className="img-card"
            src={require(`../Img/${props.img}`)}
            alt="Juan topo"/>
            <div className="cont-text-card">
                <p className="nombre-card"><strong>{props.nombre}</strong></p>
                <p className="aparicion-card">Primera aparicion en <strong>temporada {props.temporada}</strong></p>
                <p className="info-card">{props.info}</p>
            </div>
        </div>
    )
}

export default Card;