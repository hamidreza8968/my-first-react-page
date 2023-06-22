import React from "react";
import TodoItem from "./components/TodoItem";
import "./style.css";
import products from "./components/Products";
import {useState} from "react";

const App = function () {
    const [state , setState] = useState(products);


    const handleChange = (id) => {
        setState(state => {
            const updatedState = state.map(product => {
                if (product.id === id){
                    product.completed = !product.completed
                }
                return product;
            })
            return updatedState;
        })
    };

    const todoItems = state.map(product => <TodoItem  key={product.id} item={product} handleChange={handleChange}/>);

    return(
        <div className="todo-list">
            {todoItems}
        </div>
    )
};

export default App;