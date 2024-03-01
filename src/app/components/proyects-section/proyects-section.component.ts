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

  hoverState = 'initial';
  toggleHoverState() {
    this.hoverState = (this.hoverState === 'initial' ? 'hovered' : 'initial');
  }


  project=[
    {
      titulo: "Albumize - Página de reseñas de álbumes de música",
      imagenUrl: "assets/images/albumize.webp",
      tecnologias: ["Angular", "Node.js","TypeScript","HTML & CSS","Spotify API"],
      descripcion: "Página de música en la que puedes dejar una reseña o un puntaje a cualquier álbum. Creada en un equipo de tres personas, utilizando Angular como herramienta principal y consumiendo la API de Spotify.",
      codigoUrl: "url_del_codigo",
      verUrl: "url_para_ver"
    },
    {
      titulo: "Albumize - Página de reseñas de álbumes de música",
      imagenUrl: "assets/images/albumize.webp",
      tecnologias: ["Angular", "Node.js","TypeScript","HTML & CSS","Spotify API"],
      descripcion: "Página de música en la que puedes dejar una reseña o un puntaje a cualquier álbum. Creada en un equipo de tres personas, utilizando Angular como herramienta principal y consumiendo la API de Spotify.",
      codigoUrl: "url_del_codigo",
      verUrl: "url_para_ver"
    }
  ]
  constructor(){}

}
