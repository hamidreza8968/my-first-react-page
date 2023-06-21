import React from "react";
import {useState} from "react";

const TodoItem = function ({item}) {

    const [change , setChange] = useState(false);
    const checkHandle = () =>{
        setChange(change ? false : true);
    };

    return (
        <div className="todo-item">
            <input type="checkbox" checked={change} onChange={checkHandle}/>
            <p>{item.id}-{item.name} : {item.price}</p>
        </div>
    )
};

export default TodoItem;