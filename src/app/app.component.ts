import { Component } from '@angular/core';
import { Persona } from './personna.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listadoPersonas';
  personas: Persona[] = [
  new Persona('Diego','Leguizamon'), 
  new Persona('Laura','Juarez'),
  new Persona('Karla','algo')];

}
