import React from "react";

const Todo=({txt})=>{
    return(
        <div className="todo">
            <li className="todo-item">{txt}</li>
        </div>
    );

}
export default Todo;