import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-final-section',
  templateUrl: './final-section.component.html',
  styleUrls: ['./final-section.component.css']
})
export class FinalSectionComponent {

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
