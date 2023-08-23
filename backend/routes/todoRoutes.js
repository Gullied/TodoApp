const router = require("express").Router()
const {createTodo, updateTodo, getAllTodos, deleteTodo} = require("../controllers/todoControllers")


router.get("/", getAllTodos)
router.post("/create", createTodo)
router.put("/update/:id", updateTodo)
router.delete("/delete/:id", deleteTodo)

module.exports = router

