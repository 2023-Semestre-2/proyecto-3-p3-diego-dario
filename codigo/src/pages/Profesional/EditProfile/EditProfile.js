import React from "react";
import { Link } from "react-router-dom";

function EditProfileProfesional() {
	return (
	<>
			{/* Regresarse */}
			<div className="d-flex justify-content-start mt-2 ms-5">
				<Link to="/profesional">
					<span class="material-symbols-outlined icon-primary">arrow_back_ios</span>
				</Link>
			</div>

			{/* Formulario */}
			<div className="container px-5">
			<form >
				<h1 className="text-center">Editar Información</h1>
				<div className="row mt-4">
					<div className="col">
						<label for="email" className="form-label">
							Correo electrónico
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder=""
						/>
					</div>					
					<div className="col">
						<label for="name" className="form-label">
							Nombre
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Armando Mendoza"
						/>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col">
						<label for="description" className="form-label">
							Descripción
						</label>
						<textarea className="form-control"></textarea>
					</div>			
				</div>
				<div className="row mt-4">
					<div className="col">
						<label htmlFor="direction" className="form-label">Dirección</label>
						<input
							type="text"
							className="form-control"
							id="direction"
							placeholder="Dirección"/>
					</div>
					<div className="col">
						<label htmlFor="telephone" className="form-label">Teléfono</label>
						<input
							type="text"
							className="form-control"
							id="telephone"
							placeholder="Teléfono"/>
					</div>
					<div className="col">
						<label htmlFor="price" className="form-label">Precio por su servicio</label>
						<input
							type="number"
							className="form-control"
							id="price"
							placeholder="Precio"/>
					</div>
				</div>
				<div className="row mt-4">
					<label htmlFor="certificates" className="form-label">Agregar certificados</label>
					<input
						type="file"
						className="form-control"
						id="certificates"
						placeholder="Certificados"/>
				</div>
			</form>
		</div>
	</>
	);
}

export default EditProfileProfesional;
