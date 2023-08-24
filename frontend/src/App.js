import { useEffect, useState } from "react";
import Todo from "./component/todo"
import { getAllTodos } from "./utils/handleApis";

function App() {
  const [todo,setToDo] = useState([])
  useEffect (()=> {
    getAllTodos(setToDo)
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="Top">
          <input type="text" placeholder="Type your Todo..."/>
          <div className="Add">Add</div>
        </div>
        <div className="Todolist">

        {todo.map((item) => <Todo key={item._id} text={item.todo}/>)}

        </div>
      </div>
      
    </div>
  );
}

export default App;
