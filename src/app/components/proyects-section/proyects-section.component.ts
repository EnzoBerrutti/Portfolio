import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects-section',
  templateUrl: './proyects-section.component.html',
  styleUrls: ['./proyects-section.component.css'],
  animations: [
    trigger('scaleOnHover', [
      state('initial', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.01)' })),
      transition('initial => hovered', animate('0.3s ease-in')),
      transition('hovered => initial', animate('0.3s ease-out'))
    ])
  ]
})
export class ProyectsSectionComponent {

  mostrarDescripcion: boolean = false;

  mostrarTexto() {
    this.mostrarDescripcion = true;
  }

  ocultarTexto() {
    this.mostrarDescripcion = false;
  }

  
  constructor(){}

}
