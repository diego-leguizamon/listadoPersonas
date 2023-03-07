import { EventEmitter } from "@angular/core";
import Swal from "sweetalert2";
import { Persona } from "./personna.model";

export class LoggingService{
    
    personas: Persona[] = [
        new Persona('Diego','Leguizamon'), 
        new Persona('Laura','Juarez'),
        new Persona('Karla','algo')];

    saludar = new EventEmitter<number>;
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
        this.personas.push(persona);
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
    }
    
    encontrarPersona(id:number){
        let persona: Persona= this.personas[id];
        return persona;
    }
    modificarPersona(id: number, persona : Persona){
        let persona1 = this.personas[id];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }
}