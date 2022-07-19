import cl from "./Button.module.css";

export const Button = ({ children, ...props }) => {
	return (
		<button className={cl.btn} {...props}>
			{children}
		</button>
	);
};
