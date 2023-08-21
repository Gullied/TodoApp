const todoModel = require("../model/todoModel")

const getTodo = async (req,res) => {
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

module.exports = {
    getTodo,
    createTodo
}