import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

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
    ]),
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
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
    description: 'La página web es una plataforma de reseñas de álbumes musicales donde los usuarios pueden dejar comentarios y puntuaciones para cualquier álbum de música.',
    lengList: ['Angular', 'TypeScript', 'HTML', 'CSS','Spotify API'],
    imagenUrl: 'assets/images/albumize-final.jpg',
    gitURL:'https://github.com/EnzoBerrutti/albumize',
    pageURL:'https://albumize.vercel.app/home'
  },
  {
    title: 'Nerflis',
    description: 'Esta plataforma es un servicio de streaming desarrollado en Java y JSON, que ofrece a los usuarios acceso a un extenso catálogo de películas y series.',
    lengList: ['Java', 'JSON'],
    imagenUrl: 'assets/images/albumize-nonav-cuad.jpg',
    gitURL:'https://github.com/EnzoBerrutti/Proyecto-Final-Lab-III',
    pageURL:'https://github.com/EnzoBerrutti/Proyecto-Final-Lab-III'
  },
  {
    title: 'Mi Portfolio',
    description: 'Portfolio personal creado utilizando tecnologías modernas como Angular, CSS, HTML y TypeScript. Este portfolio es una muestra de mi trabajo y experiencia en el desarrollo web. ',
    lengList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    imagenUrl: 'assets/images/albumize-nonav-cuad.jpg',
    gitURL:'https://github.com/EnzoBerrutti/Portfolio',
    pageURL:'https://github.com/EnzoBerrutti/Proyecto-Final-Lab-III'
  }


];
@ViewChildren('projectItem') projectItems!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // 20% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        }
      });
    }, options);

    this.projectItems.forEach(item => {
      observer.observe(item.nativeElement);
    });
  }


}
