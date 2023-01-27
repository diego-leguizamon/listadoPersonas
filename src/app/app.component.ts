import { Component } from '@angular/core';
import { Persona } from './personna.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
  new Persona('Diego','Leguizamon'), 
  new Persona('Laura','Juarez'),
  new Persona('Karla','algo')];
  
  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }

  personaBorrada(idBorrar: number){
    this.personas.splice(idBorrar-1,1);
  }
}

