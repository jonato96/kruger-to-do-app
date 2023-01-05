const TodoApp = () =>{
    return(
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input className="todoInput"/>
                <input className="buttonCreate" type="submit" value="Create ToDo" />
            </form>
        </div>
    )
}
export default TodoApp