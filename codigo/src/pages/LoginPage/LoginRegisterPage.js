// src/components/LoginRegisterPage.js
import React from "react";
// import "./LoginRegisterPage.css"; // Archivo de estilos para esta página
import Portada_agenda from "../../assets/Portada_agenda.png";

function LoginRegisterPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img src={Portada_agenda} alt="Agenda" />
        </div>
        <div className="col">
          <div className="container">
            <div className="container-fluid d-flex justify-content-center">
              <span
                style={{ fontSize: "25rem", color: "#5b3e29"}}
                class="material-symbols-outlined primary" // Agregamos la clase primary
              >
                account_circle
              </span>
              {/* <img src={User_icon} alt="User Icon" /> */}
            </div>
            
            {/* Formulario */}
            <div className="container px-5 d-flex justify-content-center">
              <form className="d-grid gap-3 w-75">
                <div>
                  <label className="form-label" htmlFor="username"> Usuario </label>
                  <input type="text" placeholder="Ingresa tu usuario o correo" className="form-control" style={{borderColor: "#5b3e29"}} />
                </div>
                <div>
                  <label className="form-label" htmlFor="password" > Contraseña </label>
                  <input type="password" placeholder="Ingresa tu contraseña" className="form-control" style={{borderColor: "#5b3e29"}} />
                </div>
                
                <div className="d-grid">
                  <button type="button" className="btn text-white primary" style={{backgroundColor: "#5b3e29"}}>
                    Log in
                  </button>
                </div>
                
                <div className="forgot-password ">
                  <a href="/reset-password" style={{color:"#5b3e29"}}>
                    ¿Olvidó su contraseña?
                  </a>
                </div>

                <div className="register-link">
                  <a href="/register" style={{color:"#5b3e29"}}>Registrarse</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
