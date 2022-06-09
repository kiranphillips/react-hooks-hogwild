import React from "react";
import hogs from "../porkers_data";
import Hog from "./Hog";

function Display({ hog }){
    console.log("hello")


    return(
        <div>
            {hog.specialty}
            (hog.weight)
            {hog.greased}
        </div>
    )
}

export default Display