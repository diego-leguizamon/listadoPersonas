import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../personna.model';
import Swal from 'sweetalert2';
import { LoggingService } from '../../LoggingService.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit{
  
  @Output() personaCreada = new EventEmitter<Persona>();
 // @Output() personaBorrada = new EventEmitter<number>();
  nombreInput: string = '';
  apellidoInput: string = '';
  //@ViewChild ('nombreRef') nombre: ElementRef;
  //@ViewChild ('apellidoRef') apellido: ElementRef;
  //@ViewChild ('idBorrar') id:ElementRef;
  modoEdicion:number;
  idEdicion: number;
  
  
  constructor(private LoggingService:LoggingService, 
              private router: Router, 
              private route: ActivatedRoute){
    this.LoggingService.saludar.subscribe((indice: number) => alert("El indice es: "+(indice+1)));
  }
  ngOnInit(): void {
    this.idEdicion = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    
    if(this.modoEdicion!=null && this.modoEdicion===1){
      let persona: Persona = this.LoggingService.encontrarPersona(this.idEdicion);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  // usando two way binding
  /* ESTE METODO NO SE USA MAS AL UTILIZAR ROUTING
  agregarPersona(){
    
    if (this.nombreInput=="" || this.apellidoInput==""){
      Swal.fire("No puede ingresar una persona vacia");
    }else{
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      //this.personas.push(persona1);
      //this.personaCreada.emit(persona1);
      this.LoggingService.personaAgregada(persona1);
    }
  }*/

  onGuardarPersona(){
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      if(this.modoEdicion!=null && this.modoEdicion===1){
        this.LoggingService.modificarPersona(this.idEdicion, persona1);
      }else{
          this.LoggingService.personaAgregada(persona1);
      }
      this.router.navigate(['personas']);
  }


  borrarPersona(){
    if(this.idEdicion != null){
      this.LoggingService.personaBorrada(this.idEdicion);
    }
      this.router.navigate(['personas']);
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
