import { useState } from "react"
import Todo from "./Todo"

const TodoApp = () =>{
    const [title, setTitle] = useState("")
    const [todos, setTodos] = useState([])
    function handleChange(e){
        const value = e.target.value
        setTitle(value)
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
    }
    return(
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input className="todoInput" onChange={handleChange}/>
                <input className="buttonCreate" type="submit" value="Create ToDo" onClick={handleSubmit}/>                
            </form>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo key = {item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}
export default TodoApp