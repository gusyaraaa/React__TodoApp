import { Tabs } from "./Tabs";
import cl from "../styles/App.module.css";

export const TodoFilter = ({ todos, setTodos, activeTab, setActiveTab, tabs }) => {
	const tasksLeft = todos.length - todos.filter((todo) => todo.checked).length;

	const clearCompletedTasks = () => {
		localStorage.setItem("todos", JSON.stringify(todos.filter((todo) => !todo.checked)));
		setTodos(JSON.parse(localStorage.getItem("todos")));
	};

	return (
		<div className={cl.filter}>
			<p className={cl.tasks}>{tasksLeft ?? 0} tasks left</p>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
			<button className={cl.clear} onClick={clearCompletedTasks}>
				Clear completed
			</button>
		</div>
	);
};
