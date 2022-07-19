import "./Popup.css";

export const Popup = ({ isPopupActive, setPopupActive, children }) => {
	return (
		<div className={isPopupActive ? "popup active" : "popup"} onClick={() => setPopupActive(false)}>
			<div className={isPopupActive ? "popup__content active" : "popup__content"} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
