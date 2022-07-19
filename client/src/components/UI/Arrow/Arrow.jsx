import { useState } from "react";
import cl from "./Arrow.module.css";

export const Arrow = ({ todos, setTodos }) => {
	const [isRotatedArrow, setRotatedArrow] = useState(false);

	return (
		<div className={cl.arrow}>
			<div
				className={cl.button}
				style={isRotatedArrow ? { transform: "rotate(-135deg)" } : { transform: "rotate(45deg)" }}
				onClick={() => {
					setRotatedArrow(!isRotatedArrow);

					todos.forEach((todo) => (todo.checked = true));
					localStorage.setItem("todos", JSON.stringify(todos));

					setTodos(JSON.parse(localStorage.getItem("todos")));
				}}
			></div>
		</div>
	);
};
