import { Component, Input } from '@angular/core';
import { Persona } from '../personna.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input() persona: Persona;
  @Input() indice: number;
    
}
