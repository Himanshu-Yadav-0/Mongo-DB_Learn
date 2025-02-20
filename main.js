import mongoose from "mongoose"
import express from "express" 
import { Todo } from "./models/Todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")


const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title:"Hey first todo",desc:"first todo",isDone:false})
    todo.save()
  res.send('Learning Mongodb')

})

app.get('/a', async(req, res) => {
    let todo = await Todo.find() 
  res.json(todo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
