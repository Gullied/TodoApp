const todoModel = require("../model/todoModel")

const getAllTodos = async (req,res) => {
    const todos = await todoModel.find()
    res.send(todos);
}

const createTodo = async (req,res) => {
    const {todo} = req.body
    todoModel
    .create({todo})
    .then((data)=> {
        console.log("Added succefully....")
        console.log(data)
        res.send(data)
    })

}

const updateTodo = async (req,res) => {
    const id = req.params.id
    const {todo} = req.body
    const updatedTodo = await todoModel.findByIdAndUpdate(id,{todo})
    console.log(updatedTodo)
    res.send(updatedTodo)
}

const deleteTodo = async (req,res) => {
    const id = req.params.id
    const deletedTodo = await todoModel.findByIdAndDelete(id)
    console.log(`deleted todo : ${deletedTodo}`)
    res.send(`Successfully deleted todo with id: ${id}`)
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}