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
}

export {getAllTodos, addTodo}