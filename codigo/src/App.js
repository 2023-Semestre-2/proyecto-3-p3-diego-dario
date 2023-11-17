// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginPage/LoginRegisterPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfesionalHome from "./pages/Profesional/Home/ProfesionalHome";
import Header from "./components/Navigation/Header";
import EditProfileProfesional from "./pages/Profesional/EditProfile/EditProfile";
import Appointments from "./pages/Profesional/Appointments/Appointments";
import Ratings from "./pages/Profesional/Ratings/Ratings";
import EditProfileClient  from "./pages/Client/EditProfile/EditProfileClient";
import Agenda from "./pages/Client/Agenda/Agenda";
import AppointmentsClient from "./pages/Client/Appointments/Appointment";
import ClientHome from "./pages/Client/Home/ClientHome";
import History from "./pages/Client/History/History";

function App() {
	return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginRegisterPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/reset-password" element={<h1>Reset Password</h1>} />
          <Route path="/profesional*" element={<ProfesionalPage/>}/>
          <Route path="/cliente*" element={<ClientPage/>}/>
        </Routes>
    </Router>
	);
}

function ClientPage(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="" element={<ClientHome/>}/>
        <Route path="editar-perfil" element={<EditProfileClient/>}/>
        <Route path="citas" element={<AppointmentsClient/>}/>
        <Route path="agenda" element={<Agenda/>}/>
        <Route path="historial" element={<History/>}/>
      </Routes>
    </div>
  )
}

function ProfesionalPage(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="" element={<ProfesionalHome/>}/>
        <Route path="editar-perfil" element={<EditProfileProfesional/>}/>
        <Route path="citas" element={<Appointments/>}/>
        <Route path="calificaciones" element={<Ratings/>}/>
      </Routes>
    </div>
  )
}
export default App;
