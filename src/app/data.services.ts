import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './personna.model';

@Injectable()
export class DataServices{
    //este servicio se encarga  de comunicarse con la base de datos usando 
    //un metodo de inyeccion con otro servicio, httpClient
    
    constructor(private httpClient: HttpClient, 
                private loginservice: LoginService){}


    //cargar personas
    cargarPersonas(){
        const token = this.loginservice.geIdToken();
        return this.httpClient.get('https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos.json?auth='+token);
        
    }
    //guradar personas
    guardarPersonas(personas: Persona[]){
        const token = this.loginservice.geIdToken();
        this.httpClient.put('https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response => console.log("resultado de guardar Personas"+ response),
            error => console.log("Error al guardar personas: ", error)
        );
    }

    //modificar personas
    modificarPersona(index: number, persona:Persona){
        const token = this.loginservice.geIdToken();
        let url: string;
        url = 'https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos/'+index +'.json?auth='+token;
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado de modificar Persona"+ response)
        ,
            error => console.log('Error en el proceso '+ error)
        );
    }
    
    //borrar personas
    borrarPersona(index: number){
        const token = this.loginservice.geIdToken();
        let url: string;
        url = 'https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos/'+index +'.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("Registro Borrado" + response),
            error => console.log("Error al eliminar el registro" + error)
        );
    }

}