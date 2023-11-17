import React from "react";
import { Link } from "react-router-dom";

function EditProfileClient(){
	return(
		<div className="container">
			{/* Boton de regreso */}
			<Link to="/cliente">
				<span class="material-symbols-outlined icon-primary">arrow_back_ios</span>
			</Link>

			<div>
				<h1 className="text-center">Editar Información</h1>
			</div>
			
			{/* Formulario */}
			<form className="container d-flex flex-column justify-content-center w-50">
					<div className="row">
						<label htmlFor="email" className="form-label">Correo</label>
						<input type="email" id="email" className="form-control" placeholder="Correo"/>
					</div>
					<div className="row">
						<label htmlFor="name" className="form-label">Nombre</label>
						<input type="text" id="name" className="form-control" placeholder="Nombre"/>
					</div>
					<div className="row">
						<label htmlFor="telephone" className="form-label">Teléfono</label>
						<input type="text" id="telephone" className="form-control" placeholder="Teléfono"/>
					</div>
					<div className="row">
						<label htmlFor="direction" className="form-label">Dirección</label>
						<textarea id="direction" className="form-control" placeholder="Dirección"/>
					</div>
					<div className="row">
						<label htmlFor="password" className="form-label">Contraseña</label>
						<input type="password" id="password" className="form-control" placeholder="Contraseña"/>
					</div>
			</form>
		</div>
	)
}	

export default EditProfileClient;