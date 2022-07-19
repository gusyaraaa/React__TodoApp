import { useState } from "react";
import { PopupInput } from "./PopupInput";
import { Button } from "./UI/Button/Button";

export const PopupContent = ({ todos, setTodos, title, id, setPopupActive }) => {
	const [newTitle, setNewTitle] = useState(title);

	const editTodo = () => {
		if (!newTitle) return;

		todos.find((todo) => todo.id === id).title = newTitle;

		localStorage.setItem("todos", JSON.stringify([...todos]));
		setTodos(JSON.parse(localStorage.getItem("todos")));
		setPopupActive(false);
	};

	return (
		<>
			<PopupInput editTodo={editTodo} newTitle={newTitle} setNewTitle={setNewTitle} />
			<Button onClick={editTodo}>Edit task</Button>
		</>
	);
};
