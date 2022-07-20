import { useContext } from "react";
import { NotepadContext } from "../context";
import cl from "../styles/App.module.css";

export const Tabs = ({ tabs }) => {
	const { activeTab, setActiveTab } = useContext(NotepadContext);
	const openTab = (e) => setActiveTab(+e.target.dataset.index);

	return (
		<div className={cl.tabs}>
			{tabs.map(({ title }, index) => (
				<button className={index === activeTab ? cl.active : ""} key={index} onClick={openTab} data-index={index}>
					{title}
				</button>
			))}
		</div>
	);
};
