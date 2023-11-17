import React from "react";
import { useEffect, useState } from "react";
import "./ClientHome.css";
function Home() {
	let services =[
		{
			id: 1,
			name: "Corte de cabello",
			description: "Corte de cabello para hombre",
			price: 100,
			duration: 30,
			professional: "Armando Mendoza",
			professionalId: 1,
			professionalPhoto: "https://picsum.photos/10",
			professionalRating: 4.5,
			professionalDescription: "Corte de cabello para hombre",
			professionalDirection: "Calle 123",
			professionalTelephone: "1234567890",
			professionalEmail: "armando@gmail.com"
		},
		{
			id: 1,
			name: "Corte de cabello",
			description: "Corte de cabello para hombre",
			price: 100,
			duration: 30,
			professional: "Armando Mendoza",
			professionalId: 1,
			professionalPhoto: "https://picsum.photos/10",
			professionalRating: 4.5,
			professionalDescription: "Corte de cabello para hombre",
			professionalDirection: "Calle 123",
			professionalTelephone: "1234567890",
			professionalEmail: "armando@gmail.com"
		},
	]

	const [servicesList, setServicesList] = useState(services);

	return(
    <div className="container">
        <div className="row">
            {servicesList.map((service, index) => (
                <div className="col-sm-4 mb-4" key={index}>
                    <div className="card">
                        <img src={service.professionalPhoto} className="card-img-top" alt={service.professional} />
                        <div className="card-body">
                            <h5 className="card-title">{service.professional}</h5>
                            <p className="card-text">{service.professionalDescription}</p>
                            <p className="card-text">Dirección: {service.professionalDirection}</p>
                            <p className="card-text">Teléfono: {service.professionalTelephone}</p>
                            <p className="card-text">Email: {service.professionalEmail}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
	)
}

export default Home;