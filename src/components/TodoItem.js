import React from "react";

const TodoItem = function ({item}) {

    return (
        <div className="todo-item">
            <input type="checkbox" checked={item.completed}/>
            <p>{item.id}-{item.name} : {item.price}</p>
        </div>
    )
};

export default TodoItem;