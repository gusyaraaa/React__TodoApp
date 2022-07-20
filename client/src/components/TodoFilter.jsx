import { Tabs } from "./Tabs";
import cl from "../styles/App.module.css";
import { useContext } from "react";
import { NotepadContext } from "../context";

export const TodoFilter = ({ tabs }) => {
	const { todos, setTodos } = useContext(NotepadContext);
	const tasksLeft = todos.length - todos.filter((todo) => todo.checked).length;

	const clearCompletedTasks = () => {
		localStorage.setItem("todos", JSON.stringify(todos.filter((todo) => !todo.checked)));
		setTodos(JSON.parse(localStorage.getItem("todos")));
	};

	return (
		<div className={cl.filter}>
			<p className={cl.tasks}>{tasksLeft ?? 0} tasks left</p>
			<Tabs tabs={tabs} />
			<button className={cl.clear} onClick={clearCompletedTasks}>
				Clear completed
			</button>
		</div>
	);
};
