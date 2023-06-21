import React from "react";
import TodoItem from "./components/TodoItem";
import "./style.css";
import products from "./components/Products";
import {useState} from "react";

const App = function () {

    const [state , setState] = useState(products);
    const todoItems = products.map(product => <TodoItem  key={product.id} item={product} />)
    return(
        <div className="todo-list">
            {todoItems}
        </div>
    )
};

export default App;