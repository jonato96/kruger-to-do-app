import { useState } from "react"

const TodoApp = () =>{
    const [title, setTitle] = useState("")
    function handleChange(e){
        const value = e.target.value
        setTitle(value)
    }
    return(
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input className="todoInput" onChange={handleChange}/>
                <input className="buttonCreate" type="submit" value="Create ToDo"/>
                {title}
            </form>
        </div>
    )
}
export default TodoApp