import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { Notepad } from "./components/UI/Notepad/Notepad";
import { TodoInput } from "./components/TodoInput";
import cl from "./styles/App.module.css";
import { NotepadContext } from "./context";

const data = JSON.parse(localStorage.getItem("todos")) || [];
const tabs = [
	{ title: "All", content: (todos) => todos },
	{ title: "Active", content: (todos) => todos.filter((todo) => !todo.checked) },
	{ title: "Completed", content: (todos) => todos.filter((todo) => todo.checked) },
];

export const App = () => {
	const [todos, setTodos] = useState(data);
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={cl.app}>
			<h1 className={cl.title}>todos</h1>

			<Notepad>
				<NotepadContext.Provider
					value={{
						todos,
						setTodos,
						activeTab,
						setActiveTab,
					}}
				>
					<TodoInput />
					<TodoList tabs={tabs} />
					<TodoFilter tabs={tabs} />
				</NotepadContext.Provider>
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
