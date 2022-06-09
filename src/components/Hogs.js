import React from "react";
import Hog from "./Hog";
import hogs from "../porkers_data";


function Hogs() {

const porkers= hogs.map(hog => {
    return <Hog 
    key={hog.name} 
    name={hog.name} 
    specialty={hog.specialty}
    greased={hog.greased}
    weight={hog.weight}
    image={hog.image}/>
    })

return (
    <div className="ui grid container">
        {porkers}
        
    </div>
);
}

export default Hogs