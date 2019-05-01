import React from "react";
import "../reset.css";
import "../components/index.css";

function MemoryCard(props) {
    
    // Where the info is transfered to the page
        return (
     
            <img alt = {props.name} src = {props.image} value = {props.id} onClick = {() => props.clickedImage(props.id)}/>

        );
}

export default MemoryCard;