import { EventEmitter, Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { DataServices } from "./data.services";
import { Persona } from "./personna.model";

@Injectable()
export class LoggingService{
    constructor( private dataservice: DataServices){}
    /*
    personas: Persona[] = [
        new Persona('Diego','Leguizamon'), 
        new Persona('Laura','Juarez'),
        new Persona('Karla','algo')];
    */
    personas: Persona[] = [];

    saludar = new EventEmitter<number>;
    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataservice.cargarPersonas();
        }

    /*
        este servicio se puede usar en todos los componentes de la aplicacion
        debe estar creado en la parte de compononte/provider:
            - providers: [LoggingService] -
        dentro de cada componente, sino se puede crear el provider una sola vez en la clase app.module.ts 
        en la parte de providers 
            - providers: [LoggingService] -
        con esto no necesitamos crearlo en cada componente.
        necesitamos crear el constructor para poder acceder a los procedimientos de esta clase
            - constructor(private LoggingService:LoggingService){} -
        luego de esto solo debemos llamar a la clase . procedimiento para poder consumir
            - this.LoggingService.enviaMensajeConsola("Enviamos Persona: "+persona1.nombre+' '+persona1.apellido); -

        si queremos usar un servicio dentro de otro servicio, utilizamos injected service.
        dentro de la clase que vamos a usar, antes del export agregamos:
            - @Injectable() - 
        automaticamente se importa del core, luego creamos el constructor de ese servicio y ya podemos llamar a ese servicio dentro del otro servicio    
    */
    enviaMensajeConsola(mensaje:string){
        console.log(mensaje);
    }
    
    personaAgregada(persona: Persona){   
        if(this.personas == null){
            this.personas=[];
        }
        this.personas.push(persona);
        this.dataservice.guardarPersonas(this.personas);
      }
    /*
    personaBorrada(idBorrar: number){
      let total: number=1;
      total = this.personas.length;
      if(idBorrar > total || idBorrar<=0){
         //alert('Error no existe el indice ');
        Swal.fire('Error no existe el indice que desea borrar');
        }else{
          this.personas.splice(idBorrar,1);
        }
    }*/
    personaBorrada(idBorrar: number){
       this.personas.splice(idBorrar,1); 
       this.dataservice.borrarPersona(idBorrar);
       //al no tener indice fisico y usar el que proporciona la base, cuando eleminiamos la persona
       //necesitamos regenerar la base para que no queden huecos entre indices
       this.cargarTodo();
       
    }
    
    encontrarPersona(id:number){
        let persona: Persona= this.personas[id];
        return persona;
    }
    modificarPersona(id: number, persona : Persona){
        let persona1 = this.personas[id];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataservice.modificarPersona(id, persona);
    }
    cargarTodo(){
        if(this.personas != null){
            this.dataservice.guardarPersonas(this.personas);
        }
    }
}