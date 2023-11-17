// src/components/RegisterPage.js
import React, { useState } from "react";
// import "./RegisterPage.css"; // Asegúrate de tener el archivo de estilos
import User_icon from "../../assets/User_icon.jpg";
import { Link } from "react-router-dom";

function RegisterPage() {
	const [isProfessional, setIsProfessional] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const [profileImage, setProfileImage] = useState(null);

	const handleProfessionalCheckbox = () => {
		setIsProfessional(!isProfessional);
		setIsClient(false);
	};

	const handleClientCheckbox = () => {
		setIsClient(!isClient);
		setIsProfessional(false);
	};

	const handleImageUpload = (event) => {
		// Lógica para cargar la imagen al área circular
		const file = event.target.files[0];
		// Actualiza el estado con la imagen seleccionada
		setProfileImage(URL.createObjectURL(file));
	};

	return (
		<div className="container-flex p-5">
			<div className="card mx-auto px-3 " style={{ width: "35em" }}>
				{/* Botón de regresar */}
				<div className="mt-2">
					<Link to="/">
						<span class="material-symbols-outlined i" style={{color:"#5b3e29"}}>
							arrow_back_ios_new
						</span>
					</Link>
				</div>

				{/* Área circular con imagen */}
				<div className="container">
					<div className="container d-flex justify-content-center">
						<img
							src={profileImage || User_icon}
							alt="Profile"
							className="w-50"
						/>
					</div>

					{/* Botón para seleccionar imagen */}
					<div className="container d-flex justify-content-center">
						<label htmlFor="fileInput">
							<span
								style={{
									cursor: "pointer",
									color: "#5b3e29",
									marginTop: "-5em",
								}}
								class=" material-symbols-outlined"
							>
								photo_camera
							</span>
						</label>
						<input
							style={{ display: "none" }}
							id="fileInput"
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
						/>
					</div>

					<div className="d-flex justify-content-center">
						{/* Label que cambia según la selección */}
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								checked={isProfessional}
								onChange={handleProfessionalCheckbox}
								id="professionalCheckbox"
							/>
							<label className="form-check-labe">
							{isProfessional ? "Profesional" : "Cliente"}
						</label>
						</div>

					</div>
				</div>

				{/* Sección de formulario */}
				<div className="container mb-5">
					<form className="row g-2">
            <div>
              <label className="form-label">Correo:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu correo"
              />
            </div>

            <div>
              <label className="form-label">Nombre:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label className="form-label">Contraseña:</label>
              <input
                className="form-control"
                type="password"
                placeholder="Ingresa tu contraseña"
              />
            </div>

						{/* Botón de registro */}
						<div class="d-grid container mt-4">
							<button class="btn btn-primary" type="button">
								Registrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
