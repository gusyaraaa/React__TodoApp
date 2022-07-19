import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { Notepad } from "./components/UI/Notepad/Notepad";
import { TodoInput } from "./components/TodoInput";
import cl from "./styles/App.module.css";

const data = JSON.parse(localStorage.getItem("todos")) || [
	{ id: 1, title: "learn js", checked: false },
	{ id: 2, title: "learn css", checked: true },
	{ id: 3, title: "learn typescript", checked: false },
	{ id: 4, title: "learn react", checked: false },
];

export const App = () => {
	const [todos, setTodos] = useState(data);

	const tabs = [
		{ title: "All", todos: todos },
		{ title: "Active", todos: todos.filter((todo) => !todo.checked) },
		{ title: "Completed", todos: todos.filter((todo) => todo.checked) },
	];
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={cl.app}>
			<h1 className={cl.title}>todos</h1>

			<Notepad>
				<TodoInput todos={todos} setTodos={setTodos} />
				<TodoList todos={todos} setTodos={setTodos} tabs={tabs} activeTab={activeTab} />
				<TodoFilter todos={todos} setTodos={setTodos} activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
			</Notepad>

			<div className={cl.footer}>
				<p className={cl.info}>Double-click to edit a task</p>
				<h2 className={cl.author}>
					Created by{" "}
					<a className={cl.link} href="https://github.com/gusyaraaa" target="blank">
						gusyaraaa
					</a>
				</h2>
			</div>
		</div>
	);
};
