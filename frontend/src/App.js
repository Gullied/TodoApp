import { useEffect, useState } from "react";
import Todo from "./component/todo"
import { addTodo, getAllTodos, updateTodo } from "./utils/handleApis";

function App() {
  const [toDo,setToDo] = useState([])
  const [todo,setText] = useState("")
  const [isUpdating,setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect (()=> {
    getAllTodos(setToDo)
  }, [])

  const updateIcon = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="Top">
          <input type="text" placeholder="Type your Todo..." value={todo} onChange={(e) => setText(e.target.value)}/>
          
          <div className="Add"
           onClick={ isUpdating ? () => updateTodo(toDoId,todo,setToDo,setText,setIsUpdating )
            : () => addTodo(todo,setText,setToDo) }>
              {isUpdating ? "Update" : "Add"}
              </div>
        </div>

        <div className="Todolist">

        {toDo.map((item) => <Todo key={item._id} text={item.todo} updateIcon= {() => updateIcon(item._id, item.todo) }/>)}

        </div>
      </div>
      
    </div>
  );
}

export default App;
