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

export {getAllTodos}