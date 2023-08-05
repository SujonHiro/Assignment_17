import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { EditTodo } from "../../redux/slice/TodoSlices";

export function TodoEdit(id, item) {
	Swal.fire({
		title: "Update Task Name",
		input: "text",
		inputValue: item.task,
		inputValidator: (value) => {
			if (value) {
				store.dispatch(EditTodo({ index: id, task: value }));
			}
		},
	});
}
