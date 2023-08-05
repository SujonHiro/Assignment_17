import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/slice/TodoSlices';

const CreateTodo = () => {
    const dispatch =useDispatch()
    const myInput=useRef()
    

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10'>
                        <input ref={myInput} type="text" className='form-control' />
                    </div>
                    <div className='col-md-2'>
                        <button onClick={()=>dispatch(AddTodo(myInput.current.value))} className='btn  btn-primary'>Add Task</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default CreateTodo;