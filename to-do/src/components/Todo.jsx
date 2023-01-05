import { useState } from "react"

const Todo = ({item, onUpdate, onDelete}) =>{
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
                <button className="buttonEdit" onClick={handleClick}>Update</button>                
            </form>
        )
    }
    const TodoElement = () =>{
        return(
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>                
                <button className="buttonEdit" onClick={()=>setIsEdit(true)}>Editar</button>
                <button className="buttonDelete" onClick={(e)=> onDelete(item.id)}>Delete</button>
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