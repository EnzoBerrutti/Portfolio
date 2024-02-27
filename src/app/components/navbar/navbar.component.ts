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
    this.scrollService.scrollToSection(section);
    this.currentSection = section;
  }

  currentSection: string | null = null;
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const homeSection = document.getElementById('home');
    const aboutMeSection = document.getElementById('aboutme');
    const scrollPosition = window.scrollY || window.pageYOffset; // Usar window.scrollY si está disponible, de lo contrario, utilizar window.pageYOffset

    if (homeSection && aboutMeSection) {
      if (scrollPosition >= homeSection.offsetTop && scrollPosition < aboutMeSection.offsetTop) {
        this.currentSection = 'home';
      } else if (scrollPosition >= aboutMeSection.offsetTop) {
        this.currentSection = 'aboutme';
      } else {
        this.currentSection = null;
      }
    }
    if(window.scrollY != 0){
      this.isScrolled=true;
    }else{
      if(window.scrollY == 0){
        this.isScrolled=false;
      }
    }
    
  }
  
  

  

}

