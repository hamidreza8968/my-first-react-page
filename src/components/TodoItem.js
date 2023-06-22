import React from "react";
import {useState} from "react";

const TodoItem = function (props) {

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
            <p>{props.item.id}-{props.item.name} : {props.item.price}</p>
        </div>
    )
};

export default TodoItem;