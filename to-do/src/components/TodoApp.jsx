import "./todoApp.css"
import { useState } from "react"
import Todo from "./Todo"

const TodoApp = () =>{
    const [title, setTitle] = useState("")
    const [todos, setTodos] = useState([])

    function handleChange(e){
        const value = e.target.value
        setTitle(value)
    }

    function handleUpdate(id, value){
        const temp = [...todos]
        const item = temp.find((item) => item.id === id)
        item.title = value
        setTodos(temp)
    }

    function handleDelete(id, value){
        
        const temp = todos.filter((item)=>item.id !== id)        
        setTodos(temp)
    }

    function handleSubmit(e){
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            complete: false
        }
        const temp = [...todos]
        temp.unshift(newTodo)
        setTodos(temp)
        setTitle("")
    }
    return(
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input className="todoInput" onChange={handleChange} value={title}/>
                <input className="buttonCreate" type="submit" value="Create ToDo" onClick={handleSubmit}/>                
            </form>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo key = {item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    )
}
export default TodoApp