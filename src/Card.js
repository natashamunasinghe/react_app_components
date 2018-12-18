import React from "react";


const Card = (props) => {
    return (
        <div style={{ backgroundColor: "red"}}>
        { props.children}
        </div>

    );

}

export default Card;
