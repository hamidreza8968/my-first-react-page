import React from "react";
import TodoItem from "./components/TodoItem";
import "./style.css";
import products from "./components/Products";
import {useState} from "react";

const App = function () {
    // state
    const [isLoggedIn , setState] = useState(true);
    let logInStatus;
    const handleClick = () => {
        setState(!isLoggedIn ? true : false);
        if (logInStatus = isLoggedIn ? "in" : "out"){
        console.log(logInStatus) ;
        }
    };
    const todoItems = products.map(product => <TodoItem key={product.id} item={product} />)
    return(
        <div className="todo-list">
            {todoItems}
            <button onClick={handleClick}>log in</button>
        </div>
    )
};

export default App;