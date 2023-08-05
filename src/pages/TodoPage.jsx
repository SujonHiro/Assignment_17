import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";


const TodoPage = () => {
    return (
        <div>
            <div className='container-fluid my-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-8'>
                        <div className="card">
                            <div className='card-header'>
                                <h1 className="text-center">Todo App</h1>
                            </div>
                            <div className='card-body'>
                                <CreateTodo/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;