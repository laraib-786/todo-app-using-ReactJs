import React from "react";
import Todo from "./Todo";
const Todolist=({todo})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todo.map(eachtodo => (<Todo txt={eachtodo.text}/>))}
            </ul>

        </div>
    );
}

export default Todolist;