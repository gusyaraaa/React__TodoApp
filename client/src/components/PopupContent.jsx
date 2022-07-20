import { useContext, useState } from "react";
import { NotepadContext } from "../context";
import { PopupInput } from "./PopupInput";
import { Button } from "./UI/Button/Button";

export const PopupContent = ({ title, id, setPopupActive }) => {
	const { todos, setTodos } = useContext(NotepadContext);
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
