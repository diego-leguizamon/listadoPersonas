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
  nombreInput: string = '';
  apellidoInput: string = '';
  idBorrar:number=0;

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
  }
  borrarPersona(){
    this.personas.splice(this.idBorrar-1,1);
  }
}
