const Todo = require('../models/todo.model')

module.exports.todoController = {
    postTodo: async (req, res) => {
        try {
            const todo = await Todo.create({
                text: req.body.text,
            });
            res.json(todo)
        } catch (error) {
            res.json('Error create todo')
        }
    },
    deleteTodo: async (req, res) => {
        try {
            await Todo.findByIdAndRemove(req.params.id)
            res.json('Todo in deleted')
        } catch (error) {
            res.json('Error deleted todo')
        }
    },
    getTodo: async (req, res) => {
        try {
            const getTodo = await Todo.find()
            res.json(getTodo)
        } catch (error) {
            res.json('Error post todo')
        }
    },
    patchTodo: async (req, res) => {
        try {
            const patchTod = await Todo.findByIdAndUpdate(req.params.id, {
                complited: req.body.complited
            }, {new: true})
            res.json(patchTod)
        } catch (error) {
            res.json('Error update todo')
        }
    }
}