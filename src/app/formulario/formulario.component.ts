import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../personna.model';
import Swal from 'sweetalert2';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();
 // @Output() personaBorrada = new EventEmitter<number>();
  nombreInput: string = '';
  apellidoInput: string = '';
  //@ViewChild ('nombreRef') nombre: ElementRef;
  //@ViewChild ('apellidoRef') apellido: ElementRef;
  //@ViewChild ('idBorrar') id:ElementRef;
  idBorrar:number;
  
  constructor(private LoggingService:LoggingService, ){
    this.LoggingService.saludar.subscribe((indice: number) => alert("El indice es: "+(indice+1)));
  }
  // usando two way binding
  agregarPersona(){
    
    if (this.nombreInput=="" || this.apellidoInput==""){
      Swal.fire("No puede ingresar una persona vacia");
    }else{
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      //this.personas.push(persona1);
      //this.personaCreada.emit(persona1);
      this.LoggingService.personaAgregada(persona1);
    }
  }

  borrarPersona(){
    this.LoggingService.personaBorrada(this.idBorrar);
  }
   /*
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
   /*
   //usando VIEWCHILD
   agregarPersona(){
    if(this.nombre.nativeElement.value=="" || this.apellido.nativeElement.value==""){
      Swal.fire("No puede ingresar una persona Vacia");
    }else{
      let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
      this.LoggingService.enviaMensajeConsola("Enviamos Persona: "+persona1.nombre+' '+persona1.apellido);
      //aca usabamos output this.personaCreada.emit(persona1);
      this.LoggingService.personaAgregada(persona1);
    }
   }
  borrarPersona(){
    //this.personas.splice(this.idBorrar-1,1);
    let indice: number=this.id.nativeElement.value;
    //this.personaBorrada.emit(indice);
    this.LoggingService.personaBorrada(indice);
  }*/
}
