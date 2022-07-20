import cl from "./Input.module.css";

export const Input = ({ isInputActive, children, ...props }) => {
	return (
		<div className={cl.input}>
			{children}
			<input className={cl.form} type="text" {...props} placeholder={!isInputActive ? "What needs to be done?" : ""} />
		</div>
	);
};
