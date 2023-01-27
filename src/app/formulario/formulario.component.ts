import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../personna.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();
  @Output() personaBorrada = new EventEmitter<number>();
  nombreInput: string = '';
  apellidoInput: string = '';
  idBorrar:number=0;

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }
  borrarPersona(){
    //this.personas.splice(this.idBorrar-1,1);
    let indice: number=this.idBorrar;
    this.personaBorrada.emit(indice);

  }
}
