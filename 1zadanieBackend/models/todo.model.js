const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    text: String,
    complited: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo