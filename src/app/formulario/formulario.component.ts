import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../personna.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();
  @Output() personaBorrada = new EventEmitter<number>();
  //nombreInput: string = '';
  //apellidoInput: string = '';
  @ViewChild ('nombreRef') nombre: ElementRef;
  @ViewChild ('apellidoRef') apellido: ElementRef;
  idBorrar:number=0;

  /*
  usando two way binding
  agregarPersona(){
    if (this.nombreInput=="" || this.apellidoInput==""){
      Swal.fire("No puede ingresar una persona vacia");
    }else{
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      //this.personas.push(persona1);
      this.personaCreada.emit(persona1);
    }
  }
  */
   //usando referencia local
   /*agregarPersona(nombreRef: HTMLInputElement, apellidoRef:HTMLInputElement){
    //let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    
    if(nombreRef.value=="" || apellidoRef.value==""){
      Swal.fire("No puede ingresar una persona Vacia");
    }else{
      let persona1 = new Persona(nombreRef.value, apellidoRef.value);
      this.personaCreada.emit(persona1);
    }
   }*/
   //usando VIEWCHILD
   agregarPersona(){
    if(this.nombre.nativeElement.value=="" || this.apellido.nativeElement.value==""){
      Swal.fire("No puede ingresar una persona Vacia");
    }else{
      let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
      this.personaCreada.emit(persona1);
    }
   }
  borrarPersona(){
    //this.personas.splice(this.idBorrar-1,1);
    let indice: number=this.idBorrar;
    this.personaBorrada.emit(indice);

  }
}
