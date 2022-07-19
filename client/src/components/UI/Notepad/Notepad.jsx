import cl from "./Notepad.module.css";

export const Notepad = ({ children }) => {
	return <div className={cl.content}>{children}</div>;
};
