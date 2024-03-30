import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes, query, AnimationBuilder} from '@angular/animations';
import Typed from 'typed.js';
import { TagCanvasOptions } from 'ng-tagcanvas';
import { delay1Animation, delay2Animation, delay3Animation, delay4Animation, delay5Animation, delay6Animation, fadeInAnimation } from 'src/app/services/animations/fade-in.animations';
import { Router } from '@angular/router';




@Component({
  selector: 'app-my-section',
  templateUrl: './my-section.component.html',
  styleUrls: ['./my-section.component.css'],
  animations: [
    trigger('animaciones',[
      state('active',style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive',style({
        transform: 'translate(40px, 50px)'
      })),
      transition('inactive=>active',animate('1000ms ease-in')),
      transition('active=>inactive',animate('1000ms ease-out'))
    ]),
    trigger('animation-avatar',[
      state('active',style({
        transform: 'translate(0px, 50px)'
      })),
      state('inactive',style({
        transform: 'translate(0px, -20px)'
      })),
      transition('inactive=>active',animate('3000ms ease-in')),
      transition('active=>inactive',animate('3000ms ease-out'))
    ]),

    
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-90px)' // Mueve el elemento hacia arriba para la animación de arriba hacia abajo
      })),
      transition('void => *', [
        animate('500ms ease-out') // Ajusta la duración de la animación según tus necesidades
      ])
    ])
  ]

})


export class MySectionComponent implements OnInit, AfterViewInit{


  @ViewChild('hola') holaElement!: ElementRef;
  @ViewChild('enzo') enzoElement!: ElementRef;
  @ViewChild('berrutti') berruttiElement!: ElementRef;
  @ViewChild('fullstack') fullstackElement!: ElementRef;
  @ViewChild('personaltext') personaltextElement!: ElementRef;
  @ViewChild('contactcv') contactcvElement!: ElementRef;
  @ViewChild('contfollow') contfollowElement!: ElementRef;
  @ViewChild('imagecont') imagecontElement!: ElementRef;


  constructor(private renderer: Renderer2) { }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.currentSection = section;
    }
  }

  currentSection: string | null = null;

 
  
  state:string = 'inactive';
  private applyAnimation(element: HTMLElement): void {
    this.renderer.addClass(element, 'visible');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.applyAnimation(this.holaElement.nativeElement);
      setTimeout(() => {
        this.applyAnimation(this.enzoElement.nativeElement);
        setTimeout(() => {
          this.applyAnimation(this.fullstackElement.nativeElement);
          setTimeout(() => {
            this.applyAnimation(this.personaltextElement.nativeElement);
            setTimeout(() => {
              this.applyAnimation(this.contactcvElement.nativeElement);
              setTimeout(() => {
                this.applyAnimation(this.contfollowElement.nativeElement);
                setTimeout(() => {
                  this.applyAnimation(this.imagecontElement.nativeElement);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/pdf/CV-SPR.pdf');
    link.setAttribute('download', 'CV-SPR.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  ngOnInit(): void {

    setInterval(()=>{
      if(this.state == 'active'){
        this.state = 'inactive'

      }else{
        this.state = 'active'
      }
    },1500);

    const options ={
      strings: ['Programador Front End', 'Programador Back End'],
      typeSpeed: 60,
      backSpeed:60,
      loop: true
    }

    const wri = new Typed('.auto-typed',options);

  }

 

 
  

}
