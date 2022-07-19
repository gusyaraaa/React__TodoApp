import cl from "../styles/App.module.css";

export const Tabs = ({ activeTab, setActiveTab, tabs }) => {
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
