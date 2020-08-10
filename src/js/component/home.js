import React, { useState } from "react";

//include images into your bundle
import ToDoList from "./ToDoList";
import TaskList from "./TaskList";

//create your first component
export function Home() {
	const [todos, setTodos] = useState([]);

	//--------------------------------------------FETCH GET---------------------------------------------------------

	const [userName, setUserName] = useState("");

	function userNameInputChange(e) {
		setUserName(e.target.value);
	}

	const baseUrl = "https://assets.breatheco.de/apis/fake/todos";

	const getTodos = async username => {
		const response = await fetch(`${baseUrl}/user/${username}`);
		try {
			if (response.ok) {
				const todoList = await response.json();
				setTodos(todoList);
			} else if (response.status === 404) {
				createUser(userName);
			} else {
				console.log(
					`response: ${response.status} ${response.statusText}`
				);
			}
		} catch (error) {
			console.log(`error: ${error}`);
		}
	};

	function userSubmit(e) {
		if (e.key === "Enter") {
			getTodos(userName);
		}
	}

	//-------------------------------------CREATE USER POST----------------------------------------------------

	const createUser = async username => {
		const response = await fetch(`${baseUrl}/user/${username}`, {
			method: "POST",
			body: JSON.stringify([]),
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
		} catch (error) {
			console.log(`error: ${error}`);
		}
	};

	//----------------------------------UPDATE TASK PUT---------------------------------------------------

	const [task, setTask] = useState([
		{
			label: "",
			done: false
		}
	]);

	const createTask = async (username, task) => {
		const response = await fetch(`${baseUrl}/user/${username}`, {
			method: "PUT",
			body: JSON.stringify([...todos, task]),
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
		} catch (error) {
			console.log(`error!!!!!: ${error}`);
		}
	};

	//-------------------------------DELETE---------------------------------------------------------------

	const deleteTodo = async username => {
		const response = await fetch(`${baseUrl}/user/${username}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		});
		try {
			if (response.ok) {
				location.reload();
			} else {
				console.log(
					`response: ${response.status} ${response.statusText}`
				);
			}
		} catch (error) {
			console.log(`error: ${error}`);
		}
	};

	//-----------------------------------RETURN----------------------------------------------------------
	return (
		<>
			<div className="d-flex justify-content-center m-3">
				<div>
					<div className="d-flex justify-content-center m-3">
						<h1>To Do</h1>
					</div>
					<ToDoList
						userSubmit={userSubmit}
						userNameInputChange={userNameInputChange}
						userName={userName}
						createTask={createTask}
						task={task}
						setTask={setTask}
					/>
					<TaskList
						baseUrl={baseUrl}
						userName={userName}
						getTodos={getTodos}
						todos={todos}
						deleteTodo={deleteTodo}
					/>
				</div>
			</div>
		</>
	);
}
