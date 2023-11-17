import React from "react";
import { Link } from "react-router-dom";
function History() {
	return (
		<div className="container">
			{/* Boton de regreso */}
			<Link to="/cliente">
				<span class="material-symbols-outlined icon-primary">
					arrow_back_ios
				</span>
			</Link>
			<h1>History</h1>
		</div>
	);
}

export default History;
