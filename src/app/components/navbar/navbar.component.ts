import { Component, HostListener } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private scrollService: ScrollServiceService) {}

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.currentSection = section;
    }
  }

  currentSection: string | null = null;
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const homeSection = document.getElementById('home');
    const aboutMeSection = document.getElementById('aboutme');
    const projectSection = document.getElementById('project');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (homeSection && aboutMeSection && projectSection) {
      if (scrollPosition >= homeSection.offsetTop && scrollPosition < aboutMeSection.offsetTop) {
        this.currentSection = 'home';
      } else if (scrollPosition >= aboutMeSection.offsetTop && scrollPosition < projectSection.offsetTop) {
        this.currentSection = 'aboutme';
      } else if (scrollPosition >= projectSection.offsetTop) {
        this.currentSection = 'project';
      } else {
        this.currentSection = null;
      }
    }
    
    this.isScrolled = window.scrollY !== 0;
  }
}
