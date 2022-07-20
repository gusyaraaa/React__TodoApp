import { useState } from "react";
import { Checkbox } from "./UI/Checkbox/Checkbox";
import { Popup } from "./UI/Popup/Popup";
import cl from "../styles/App.module.css";
import { PopupContent } from "./PopupContent";

export const TodoItem = ({ id, title, ...props }) => {
	const [isPopupActive, setPopupActive] = useState(false);

	return (
		<div className={cl.todoItem} onDoubleClick={() => setPopupActive(true)}>
			<Checkbox id={id} title={title} {...props} />

			<Popup isPopupActive={isPopupActive} setPopupActive={setPopupActive}>
				<PopupContent title={title} id={id} setPopupActive={setPopupActive} />
			</Popup>
		</div>
	);
};
