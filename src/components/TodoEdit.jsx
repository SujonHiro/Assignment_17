import Swal from "sweetalert2"
import Store from "../../redux/store/Store"
import { EditTodo } from "../../redux/slice/TodoSlices"
export  function TodoEdit(i,item){
    Swal.fire({
        title: 'Update task Name',
        input:'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                Store.dispatch(EditTodo({index:i,task:value}))
            }
        }
      })

}