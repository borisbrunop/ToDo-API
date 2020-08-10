import React, { useState } from "react";

function ToDoList({
	userNameInputChange,
	userSubmit,
	userName,
	createTask,
	task,
	setTask
}) {
	function handleTaskInputChange(e) {
		setTask({ label: e.target.value, done: false });
	}

	function handleSubmit(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			createTask(userName, task);
			console.log(task);
			e.target.value = "";
		}
	}

	return (
		<>
			<div className="d-flex input-group input-group-sm">
				<input
					onChange={userNameInputChange}
					onKeyDown={userSubmit}
					type="text"
					className="form-control"
					aria-label="Small"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="Insert Username"
				/>
				<input
					onChange={handleTaskInputChange}
					onKeyDown={handleSubmit}
					type="text"
					className="form-control"
					aria-label="Small"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="Insert ToDo"
				/>
			</div>
		</>
	);
}

export default ToDoList;
