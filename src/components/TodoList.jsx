import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../../redux/slice/TodoSlices";
import { TodoDelete } from "./TodoDelete";
import { TodoEdit } from "./TodoEdit";

const TodoList = () => {
	const dispatch = useDispatch();
	const todoItems = useSelector((state) => state.todo.value);

	const handleChange = (id) => {
		dispatch(completeTodo(id));
	};

	return (
		<div>
			<div className="container my-5">
				<div className="row">
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
								{todoItems.map((item, i) => (
									<tr key={item.id}>
										<td>{i + 1}</td>
										<td>
											<input
												type="checkbox"
												checked={item.completed}
												onChange={() =>
													handleChange(item.id)
												}
											/>
										</td>
										<td
											style={{
												textDecoration: item.completed
													? "line-through"
													: "none",
											}}
										>
											{item.task}
										</td>
										<td>
											<button
												onClick={() => {
													TodoEdit(item.id, item);
												}}
												className="btn btn-sm btn-dark"
											>
												Edit
											</button>
										</td>
										<td>
											<button
												onClick={() => {
													TodoDelete(item.id);
												}}
												className="btn btn-sm btn-danger"
											>
												Remove
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
