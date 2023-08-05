import { useDispatch, useSelector } from "react-redux";
import { TodoDelete } from "./TodoDelete";
import { TodoEdit } from "./TodoEdit";
import {completeTodo} from "../../redux/slice/TodoSlices"

const TodoList = () => {
    const handleChange = (index) => {
        dispatch(completeTodo(index));
    };
    
    const todoItem=useSelector((state)=>state.todo.value)
    const dispatch=useDispatch()
    return (
        <div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-md-12">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                <th>SL Num</th>
                                <th>Complete</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todoItem.map((item,i)=>{
                                    return(

                                        <tr key={i.toString()}>
                                            <td>{i}</td>
                                            <td><input type="checkbox"
                                                    checked={item.completed}
                                                    onChange={() => handleChange(i)}/></td>



                                                    
                                        
                                        <td>{item}</td>
                                        
                                        <td><button onClick={()=>{ TodoEdit(i,item)}} className="btn btn-sm btn-dark">Edit</button></td>
                                        <td><button onClick={()=>{TodoDelete(i)}} className="btn btn-sm btn-danger">Remove</button></td>
                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;