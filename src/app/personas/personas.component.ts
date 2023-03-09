import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../personna.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  
  personas: Persona[] = [];
  constructor(private loggingService: LoggingService, private router: Router){}

  ngOnInit(): void{
    //this.personas = this.loggingService.personas;
    this.loggingService.obtenerPersonas()
    .subscribe(
     (personas: any) =>{
        this.personas = personas;
        this.loggingService.setPersonas(personas);
       }
    );

  }

  agregar(){
     this.router.navigate(['personas/agregar'])
  }

}

