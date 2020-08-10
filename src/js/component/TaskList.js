import React from "react";
import ToDo from "./ToDo";
// import ToDoUser from "./ToDoUser";

function TaskList({ todos, userName, getTodos, baseUrl, deleteTodo }) {
	let styleSpan = "";
	if (todos.length === 0) {
		styleSpan = "d-none";
	} else {
		styleSpan = "";
	}

	function handleDeleteTodo() {
		deleteTodo(userName);
	}

	return (
		<>
			<ul id="list" className="list-group list-group-flush">
				{todos.map((task, index) => (
					<ToDo
						key={index}
						task={task}
						index={index}
						todos={todos}
						userName={userName}
						getTodos={getTodos}
						baseUrl={baseUrl}
					/>
				))}
				{/* {taskUser.map(function(listUser, id) {
					<ToDoUser key={id} listUser={listUser} removeTodo={removeTodo} />;
				})} */}
			</ul>
			<span className={`float-left m-1 ml-3 ${styleSpan}`}>
				{todos.length} items left
			</span>
			<button
				type="button"
				className={`btn btn-light float-right ${styleSpan}`}
				onClick={handleDeleteTodo}>
				Delete
			</button>
		</>
	);
}

export default TaskList;

{
	/* <li className="list-group-item">
como
<span className="float-right">
	<i className="fas fa-times" />
</span>
</li> */
}
