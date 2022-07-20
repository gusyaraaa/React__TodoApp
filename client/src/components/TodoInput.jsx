import { useContext, useState } from "react";
import { NotepadContext } from "../context";
import { Arrow } from "./UI/Arrow/Arrow";
import { Input } from "./UI/Input/Input";

export const TodoInput = () => {
	const { todos, setTodos } = useContext(NotepadContext);
	const [isInputActive, setInputActive] = useState(false);

	const addTodo = (e) => {
		if (e.key === "Enter" && e.target.value.trim() !== "") {
			localStorage.setItem(
				"todos",
				JSON.stringify([
					{
						id: todos.length + 1,
						title: `${e.target.value}`,
						checked: false,
					},
					...todos,
				])
			);

			setTodos(JSON.parse(localStorage.getItem("todos")));

			e.target.value = "";
		}
	};

	return (
		<Input
			name="addTodo"
			id="addTodo"
			isInputActive={isInputActive}
			onKeyDown={addTodo}
			onFocus={() => setInputActive(true)}
			onBlur={() => setInputActive(false)}
		>
			<Arrow />
		</Input>
	);
};
