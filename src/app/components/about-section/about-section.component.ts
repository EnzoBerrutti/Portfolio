import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fadeInAnimation } from 'src/app/services/animations/fade-in.animations';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
  animations: [fadeInAnimation]
})
export class AboutSectionComponent implements AfterViewInit{
  @ViewChild('elementoAAnimar') elementoAAnimar!: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // 20% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elementoAAnimar.nativeElement);
  }



}
