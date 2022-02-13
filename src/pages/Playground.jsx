import { useEffect, useState } from 'react';
import { useCreateNewTask, useCreateUser, useLogin, useTasks } from '../services/firebase/firebase';

export function Playground() {
	const createUser = useCreateUser();
	const userLogin = useLogin();
	const createNewTask = useCreateNewTask();
	const taskList = useTasks();

	const [ tasks, setTasks ] = useState([]);

	function handleSignup() {
		try {
			createUser('eduardorerick@gmail.com', '123123');
		} catch (err) {
			console.log(err);
		}
	}
	function handleLogin() {
		try {
			userLogin('eduardorerick@gmail.com', '123123');
		} catch (err) {
			console.log(err);
		}
	}
	function handleNewTask() {
		try {
			createNewTask('Nova tarefa');
		} catch (err) {
			console.log(err);
		}
	}
	function handleSeeTask() {
		try {
			const list = taskList.then((res) => setTasks(res));
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div>
			<h1>Playground</h1>
			<button onClick={handleSignup}>Cadastrar</button>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleNewTask}>Nova task</button>
			<button onClick={handleSeeTask}>Ver tasks</button>

			{tasks.map((task) => <h1>{task.title}</h1>)}
		</div>
	);
}
