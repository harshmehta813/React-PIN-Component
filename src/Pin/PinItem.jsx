import React from "react";

const defaultStyle = {
	width: "5rem",
	height: "1rem",
	borderRadius: "0.25rem",
	padding: "0.5rem 0.25rem"
};

const successStyle = {
	width: "5rem",
	height: "1rem",
	padding: "0.5rem 0.25rem",
	border: "none",
	background: "none"
};

const PinItem = React.forwardRef(
	({ length, handleChange, handleBackSpace, values }, ref) => {
		const handleKeyUp = (e) => {
			console.log(e.code);
			switch (e.code) {
				case "Backspace": {
					handleBackSpace && handleBackSpace(e.target.value);
					break;
				}
				case "ShiftLeft":
				case "ShiftRight":
				case "Tab":
				case "ArrowRight":
				case "ArrowUp":
				case "ArrowLeft":
				case "ArrowDown":
					break;
				default: {
					handleChange(e.target.value);
				}
			}
		};
		return (
			<div>
				{values[values.length - 1].length === length ? (
					<input
						ref={ref}
						maxLength={length}
						style={successStyle}
						onKeyUp={handleKeyUp}
						type="num"
						className="num"
					/>
				) : (
					<input
						ref={ref}
						maxLength={length}
						style={defaultStyle}
						onKeyUp={handleKeyUp}
						type="num"
						className="num"
					/>
				)}
			</div>
		);
	}
);

export default PinItem;
