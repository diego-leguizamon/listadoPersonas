import { Component, Input } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../personna.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input() persona: Persona;
  @Input() indice: number;
    
  constructor(private servicio: LoggingService){}
  emitirSaludo(){
    this.servicio.saludar.emit(this.indice)
  }
}
