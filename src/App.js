import React, {useState }from "react";
import Form from './components/Form';
import Todolist from "./components/Todolist";
function App(){
    const [text,updateText]=useState("");
    const [todo,updateTodo]=useState([]);
    return (
        <div className="App">
            <header>
                <h1>Todo List {text}</h1>
            </header>
            <Form text={text} updateText={updateText} todo={todo} updateTodo={updateTodo}></Form>
            <Todolist todo={todo}/>

          
        </div>
    );
}

export default App;