import { useContext } from "react";
import { NotepadContext } from "../context";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ tabs }) => {
	const { todos, setTodos, activeTab } = useContext(NotepadContext);

	const handleCheckbox = (todo) => {
		todo.checked = !todo.checked;
		localStorage.setItem("todos", JSON.stringify([...todos]));
		setTodos(JSON.parse(localStorage.getItem("todos")));
	};

	return (
		<div>
			{tabs[activeTab].content(todos).map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						id={todo.id}
						title={todo.title}
						onChange={() => {
							handleCheckbox(todo);
						}}
						checked={todo.checked}
					/>
				);
			})}
		</div>
	);
};
