import React from "react";

const pensPicture = new URL("./images/pens.jpg",import.meta.url)

function HomePage(){

    return <>
    <p>HOMEPAGE</p>
    <div>
        <img src={pens}/>
        
    </div>
    </>
}
