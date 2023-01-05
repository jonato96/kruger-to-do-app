import { useState } from "react"

const Todo = ({item}) =>{
    const [isEdit, setIsEdit] = useState(false)
    return(
        <div>
            {item.title}
            <button>Editar</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo