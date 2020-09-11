import React from 'react';
const ToDoLists = (props) => {

   
    return (
    <>
    <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={() => {props.onSelect(props.id)}}></i>
    </div>
    <li>{props.text}</li>
    </>
    );
};

export default ToDoLists;