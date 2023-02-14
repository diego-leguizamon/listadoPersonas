import { Component } from '@angular/core';
import { Persona } from './personna.model';
import Swal from 'sweetalert2';
import { disableDebugTools } from '@angular/platform-browser';

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
    let total: number=0;
    total = this.personas.length;
    if(idBorrar > total || idBorrar<=0){
      //alert('Error no existe el indice ');
      Swal.fire('Error no existe el indice que desea borrar');
    }else{
      this.personas.splice(idBorrar-1,1);
    }
  }
}

