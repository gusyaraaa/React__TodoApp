import { useState } from "react";
import { Arrow } from "./UI/Arrow/Arrow";
import { Input } from "./UI/Input/Input";

export const TodoInput = ({ todos, setTodos }) => {
	const [isInputActive, setInputActive] = useState(false);

	const addTodo = (e) => {
		if (e.key === "Enter") {
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
			todos={todos}
			setTodos={setTodos}
			name="addTodo"
			id="addTodo"
			isInputActive={isInputActive}
			onKeyDown={addTodo}
			onFocus={() => setInputActive(true)}
			onBlur={() => setInputActive(false)}
		>
			<Arrow todos={todos} setTodos={setTodos} />
		</Input>
	);
};
