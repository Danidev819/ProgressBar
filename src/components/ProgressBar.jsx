import React from "react";

export default function ProgressBar({ progress }) {
	return (
		<div>
			<h1>Progress Bar</h1>
			<div
				style={{
					width: "100%",
					backgroundColor: "#e0e0e0",
					borderRadius: "4px",
				}}
			>
				<div
					style={{
						width: `${progress}%`,
						backgroundColor: "#007bff",
						height: "24px",
						borderRadius: "4px",
					}}
				/>
			</div>
			<p>{progress}% Complete</p>
		</div>
	);
}
