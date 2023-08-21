const router = require("express").Router()
const {createTodo, getTodo} = require("../controllers/todoControllers")


router.get("/", getTodo)
router.post("/create", createTodo)

module.exports = router

