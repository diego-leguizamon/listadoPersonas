import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './personna.model';

@Injectable()
export class DataServices{
    //este servicio se encarga  de comunicarse con la base de datos usando 
    //un metodo de inyeccion con otro servicio, httpClient
    
    constructor(private httpClient: HttpClient){}


    //cargar personas
    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos.json');
        
    }
    //guradar personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response => console.log("resultado de guardar Personas"+ response),
            error => console.log("Error al guardar personas: ", error)
        );
    }

    //modificar personas
    modificarPersona(index: number, persona:Persona){
        let url: string;
        url = 'https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos/'+index +'.json';
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado de modificar Persona"+ response)
        ,
            error => console.log('Error en el proceso '+ error)
        );
    }
    
    //borrar personas
    borrarPersona(index: number){
        let url: string;
        url = 'https://listado-personas-be4e4-default-rtdb.firebaseio.com/datos/'+index +'.json';
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("Registro Borrado" + response),
            error => console.log("Error al eliminar el registro" + error)
        );
    }

}