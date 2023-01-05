import { useState } from "react"

const Todo = ({item, onUpdate}) =>{
    const [isEdit, setIsEdit] = useState(false)
    const [newValue, setNewValue] = useState(item.title)

    function handleSubmit(e){
        e.preventDefault()
    }
    
    function handleChange(e){
        const value = e.target.value
        setNewValue(value)
    }

    function handleClick(){
        onUpdate(item.id, newValue)
        setIsEdit(false)
    }
    const FormEdit = () =>{
        
        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input className="todoInput" type="text" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClick}>Update</button>                
            </form>
        )
    }
    const TodoElement = () =>{
        return(
            <div className="todoInfo">
                {item.title}
                <button onClick={()=>setIsEdit(true)}>Editar</button>
                <button  >Delete</button>
            </div>
        )
    }
    return(
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
        
    )
}
export default Todo