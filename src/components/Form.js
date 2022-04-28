
import React from "react";

const Form=({updateText,text,todo,updateTodo})=>{

    
    const textHandler=(event)=>{
        //console.log(event.target.value);
        updateText(event.target.value);
    }

    const todoHandler=(event)=>{
        event.preventDefault();
        updateTodo([...todo,{text:text}]);
        console.log(todo);
    }
    return(
        <form>
            <input onChange={textHandler} type="text" className="todo-input"/>
            <button onClick={todoHandler} className="todo-button" type="submit" >Submit

            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>

    );
}
export default Form;