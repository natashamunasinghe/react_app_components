import React from "react";
import faker from "faker";

//example of validation check for comments for word 'banana'
function isDirtyWords(input) {
    return input.match(/banana/);
}

//configurable code example
const Comment = (props) => {
//if statement inside component for conditional rendering
    if(!isDirtyWords(props.text)) {
    return  (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">{props.name}</a>
                    <p className="date"> {props.date}</p>
                    <p className="text">{props.text}</p>
                </div>
        </div>
    );
  }
  return null
  
}

export default Comment;