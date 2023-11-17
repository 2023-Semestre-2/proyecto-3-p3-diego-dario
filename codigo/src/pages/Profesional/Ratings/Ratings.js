import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function Ratings() {
	const [promedio, setPromedio] = useState(10);
	const [calificaciones, setCalificaciones] = useState([
		{
			calificacion: 5,
			usuario: "Armando Mendoza",
			comentario: "Muy buen servicio"
		},
		{
			calificacion: 5,
			usuario: "Armando Mendoza",
			comentario: "Muy buen servicio"
		},
	]);

	
	return (
		<>
			{/* Regresarse */}
			<div className="d-flex justify-content-start mt-2 ms-5">
				<Link to="/profesional">
					<span class="material-symbols-outlined icon-primary">arrow_back_ios</span>
				</Link>
			</div>
			<div className="container">
				<h1 className="text-center">Promedio General</h1>
				<h1 className="text-center">{promedio}</h1>
				<div className="container">
					{
						calificaciones.map((calificacion, index) => {
							let icono;
							if (calificacion.calificacion >= 8) {
								icono = "sentiment_very_satisfied";
							} else if (calificacion.calificacion >= 5) {
								icono = "sentiment_satisfied";
							} else {
								icono = "sentiment_dissatisfied";
							}
							return (
								<div className="row mb-5 shadow-sm">
									<div className="col-1 colum-flex text-center border-end">
										<span className="material-symbols-outlined icon-primary">{icono}</span>
										<h1>{calificacion?.calificacion}</h1>
									</div>
									<div className="col-2 d-flex flex-column text-center">
										{/* <img src="https://picsum.photos/10" alt="Foto de perfil" className="rounded-circle"/> */}
										<span className="material-symbols-outlined icon-primary">account_circle</span>
										<span>{calificacion?.usuario}</span>
									</div>
									<div className="col">
										<p className="text-ju">{calificacion?.comentario}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	);
}

export default Ratings;