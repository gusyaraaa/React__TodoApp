import { Input } from "./UI/Input/Input";

export const PopupInput = ({ editTodo, newTitle, setNewTitle }) => {
	return (
		<>
			<label htmlFor="editTitle">Type new title:</label>
			<Input
				name="editTitle"
				id="editTitle"
				value={newTitle}
				onChange={(e) => {
					setNewTitle(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setNewTitle(newTitle.trim());
						editTodo();
						e.target.value = "";
					}
				}}
			/>
		</>
	);
};
