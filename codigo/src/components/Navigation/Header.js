import React from "react";
import "./Header.css"; // Asegúrate de tener el archivo de estilos
import { Link, useLocation } from "react-router-dom";

function Header() {
	let location = useLocation();
	let isProfesional = location.pathname.startsWith("/profesional");
	return (
		<nav className="navbar navbar-expand-lg header">
			{/* icon */}
			<div className="d-flex flex-column ms-4 justify-content-center align-items-center text-center">
				<span class="material-symbols-outlined icon fs-1">
					account_circle
				</span>
				<span>Armando Mendoza</span>
			</div>

			{/* menu */}
			<div className="container d-flex flex-column justify-content-center align-items-center text-center">
				{/* Iconos */}
				<div className="row justify-content-center">
					<div className="col-auto flex-column d-flex justify-content-center align-items-center">
						<Link to="editar-perfil">
							<span class="material-symbols-outlined fs-1">
								edit
							</span>
						</Link>
						<Link
							className="text-decoration-none"
							to="editar-perfil"
						>
							Editar Perfil
						</Link>
					</div>
					<div className="col-auto d-flex flex-column justify-content-center align-items-center">
						<Link to="citas">
							<span class="material-symbols-outlined fs-1">
								event
							</span>
						</Link>
						<Link to="citas" className="text-decoration-none">
							Citas
						</Link>
					</div>
					{isProfesional && (
						<>
							<div className="col-auto d-flex flex-column justify-content-center align-items-center">
								<Link
									to="calificaciones"
									className="text-decoration-none"
								>
									<span class="material-symbols-outlined fs-1">
										grade
									</span>
								</Link>
								<Link
									to="calificaciones"
									className="text-decoration-none"
								>
									Calificaciones
								</Link>
							</div>
						</>
					)}
					{!isProfesional && (
						<>
							<div className="col-auto d-flex flex-column justify-content-center align-items-center">
								<Link
									to="agenda"
									className="text-decoration-none"
								>
									<span class="material-symbols-outlined fs-1">
										view_agenda
									</span>
								</Link>
								<Link
									to="agenda"
									className="text-decoration-none"
								>
									Agenda
								</Link>
							</div>	
							<div className="col-auto d-flex flex-column justify-content-center align-items-center">
								<Link
									to="historial"
									className="text-decoration-none"
								>
									<span class="material-symbols-outlined fs-1">
										history	
									</span>
								</Link>
								<Link
									to="historial"
									className="text-decoration-none"
								>
									Historial
								</Link>
							</div>								
						</>
					)}
					<div className="col-auto d-flex flex-column justify-content-center align-items-center">
						<Link to="recordatorios">
							<span class="material-symbols-outlined fs-1">
								notifications
							</span>
						</Link>
						<Link
							to="recordatorios"
							className="text-decoration-none"
						>
							Recordatorios
						</Link>
					</div>
				</div>

				{/* barra de busqueda */}
				<div className="row justify-content-center w-75 mt-3">
						<div className="col-12">
							<div className="mb-3">
								<input
									type="text"
									className="form-control form-input rounded-pill"
									placeholder="Buscar"
									aria-label="Buscar"
									aria-describedby="button-addon2"
								/>
							</div>
						</div>
				</div>
			</div>

			{/* Cerrar sesion */}
			<div className="d-flex flex-column me-4 justify-content-center align-items-center text-center">
				<Link to="/">
					<span class="material-symbols-outlined icon fs-1">
						exit_to_app
					</span>
				</Link>
				<Link className="text-decoration-none" to="/">
					Salir
				</Link>
			</div>
		</nav>
	);
}

export default Header;
