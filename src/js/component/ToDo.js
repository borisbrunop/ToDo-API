import React from "react";

function ToDo({ task, index, todos, userName, getTodos, baseUrl }) {
	// ----------------------------------------DELETE TASK method PUT-----------------------------------------------

	function handleRemoveTodo(e, index) {
		let taskLeft = todos.filter((todo, i) => i != index);
		//getTodos(userName);
		deleteTaskPut(userName, taskLeft);
	}
	const deleteTaskPut = async (username, taskLeft) => {
		const response = await fetch(`${baseUrl}/user/${username}`, {
			method: "PUT",
			body: JSON.stringify(taskLeft),
			headers: {
				"Content-Type": "application/json"
			}
		});
		try {
			if (response.ok) {
				getTodos(userName);
			} else {
				console.log(
					`response: ${response.status} ${response.statusText}`
				);
			}
			``;
		} catch (error) {
			console.log(`error: ${error}`);
		}
	};

	// ----------------------------------------RETURN-----------------------------------------------

	return (
		<>
			<li className={"list-group-item "}>
				{task.label}
				<span className="float-right">
					<i
						className="fas fa-times ml-2"
						onClick={e => handleRemoveTodo(e, index)}
					/>
				</span>
			</li>
		</>
	);
}

export default ToDo;
