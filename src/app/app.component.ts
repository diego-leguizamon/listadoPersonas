import { Component, OnInit } from '@angular/core';
import { Persona } from './personna.model';
import Swal from 'sweetalert2';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  ngOnInit(): void{
    this.personas = this.loggingService.personas;
  }
  

  constructor(private loggingService: LoggingService){}
  //como usamos servicios para agregar las personas, no escuchamos mas los eventos y desde
  //formulario.ts se va a encargar de agregar todo
  //no necesitamos los procedimientos siguientes
  
  /*
  personaAgregada(persona: Persona){   
    //aca usamos viewchild this.personas.push(persona);
    //ahora usamos concepto de servicios.
    this.loggingService.personaAgregada(persona);
  }
  personaBorrada(idBorrar: number){
    /*
    let total: number=0;
    total = this.personas.length;
    if(idBorrar > total || idBorrar<=0){
      //alert('Error no existe el indice ');
      Swal.fire('Error no existe el indice que desea borrar');
    }else{
      this.personas.splice(idBorrar-1,1);
    }
    this.loggingService.personaBorrada(idBorrar);
  }
  */
}

