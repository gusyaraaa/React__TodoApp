import { useContext, useState } from "react";
import { NotepadContext } from "../../../context";
import cl from "./Arrow.module.css";

export const Arrow = () => {
	const { todos, setTodos } = useContext(NotepadContext);
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
