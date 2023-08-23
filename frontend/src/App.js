import Todo from "./component/todo"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="Top">
          <input type="text" placeholder="Type your Todo..."/>
          <div className="Add">Add</div>
        </div>
        <div className="Todolist">
          <Todo text ="Asc" />
          <Todo text ="Asc" />
          <Todo text ="Asc" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
