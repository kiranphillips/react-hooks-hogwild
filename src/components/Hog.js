import React from "react";


function Hog(props){
    return(
        <div class = "ui five wide column">
            <img class = "minPigTile" src = {props.image} alt = {props.name}/>
            <p>{props.name}</p>

        </div>
        
    )
}




export default Hog