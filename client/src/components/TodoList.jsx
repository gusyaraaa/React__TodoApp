import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, setTodos, tabs, activeTab }) => {
	const handleCheckbox = (todo) => {
		todo.checked = !todo.checked;
		localStorage.setItem("todos", JSON.stringify([...todos]));
		setTodos(JSON.parse(localStorage.getItem("todos")));
	};

	return (
		<div>
			{tabs[activeTab].todos.map((todo) => {
				return todo.checked ? (
					<TodoItem
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						id={todo.id}
						title={todo.title}
						onChange={() => {
							handleCheckbox(todo);
						}}
						checked
					/>
				) : (
					<TodoItem
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						id={todo.id}
						title={todo.title}
						onChange={() => {
							handleCheckbox(todo);
						}}
					/>
				);
			})}
		</div>
	);
};
