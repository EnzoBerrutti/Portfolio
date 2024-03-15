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
  proyectos = [
  {
    title: 'Albumize',
    description: 'La página web es una plataforma de reseñas de álbumes musicales, donde los usuarios pueden dejar comentarios y puntuaciones para cualquier álbum de música.',
    lengList: ['Angular', 'TypeScript', 'HTML', 'CSS','Spotify API'],
    imagenUrl: 'assets/images/albumize-nonav-cuad.jpg'
  },
  {
    title: 'Nerflis',
    description: 'Esta plataforma es un servicio de streaming desarrollado en Java y JSON, que ofrece a los usuarios acceso a un extenso catálogo de películas y series.',
    lengList: ['Java', 'JSON'],
    imagenUrl: 'assets/images/albumize-nonav-cuad.jpg'
  },
  {
    title: 'Mi Portfolio',
    description: 'Portfolio personal creado utilizando tecnologías modernas como Angular, CSS, HTML y TypeScript. Este portfolio es una muestra de mi trabajo y experiencia en el desarrollo web. ',
    lengList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    imagenUrl: 'assets/images/albumize-nonav-cuad.jpg'
  }


];

  
  constructor(){}

}
