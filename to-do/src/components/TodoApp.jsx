import { useState } from "react"

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
        </div>
    )
}
export default TodoApp