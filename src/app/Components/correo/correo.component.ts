import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-correo',
	templateUrl: './correo.component.html',
	styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit 
{
  
	// Ejemplo de creación e inicialización de variable en un componente.
	correo:any;

	constructor() 
	{ 
		this.correo = 
		{
			titulo: "Título del Email",
			cuerpo: "Este es un cuerpo de prueba para el email.\n" + 
			"Se muestra el ejemplo con un salto de línea.\n" +
			"Un saludo.",
			emisor: "correoEmisor@openWebinar.inv",
			destinatario: "correoReceptor@openWebinar.inv"
		}
	}

	ngOnInit(): void {
	}

}
