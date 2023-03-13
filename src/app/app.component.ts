import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';

  constructor(private loginservice: LoginService){}

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyDNQ6lQByvmE8NEgW64zbAB_CdJdsYOn74",
      authDomain: "listado-personas-be4e4.firebaseapp.com",
    });
  }
  isAutenticado(){
    return this.loginservice.isAutenticado();
  }
  salir(){
    this.loginservice.logout();
  }
  
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

