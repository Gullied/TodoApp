import axios from "axios"

const baseUrl = "http://localhost:3000"

const getAllTodos = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data})=> {
        console.log("data ---> " + data);
        setToDo(data)

    })
}

const addTodo = (todo,setText,setToDo) => {
    axios
    .post(`${baseUrl}/create`, {todo})
    .then((data)=> {
        console.log(data)
        setText("")
        getAllTodos(setToDo)
    })
    .catch((err)=> console.log(err))
}

const updateTodo = (toDoId, todo, setToDo,setText,setIsUpdating) => {
    axios
    .put(`${baseUrl}/update/${toDoId}`, { todo})
    .then((data)=>{
        console.log(data)
        setText("")
        setIsUpdating(false)
        getAllTodos(setToDo)
    })
    .catch((err)=> console.log(err))
}

const deleteTodo = (todoId,setToDo) => {
    axios
    .delete(`${baseUrl}/delete/${todoId}`)
    .then((data)=>{
        console.log(data)
        getAllTodos(setToDo)

    })
    .catch((err)=> console.log(err))
}

export {getAllTodos, addTodo , updateTodo, deleteTodo}