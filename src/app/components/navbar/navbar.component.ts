import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private scrollService: ScrollServiceService) {}

  ngOnInit(): void {
    this.isScrolledUp = window.scrollY === 0;
    this.checkScroll();
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.currentSection = section;
    }
  }

  currentSection: string | null = null;
  isScrolled = false;
  isScrolledUp: boolean = true;
  lastScrollTop: number = 0;



  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolledUp = currentScroll === 0 || (currentScroll < this.lastScrollTop && currentScroll > 0);
    this.lastScrollTop = currentScroll;
    this.checkScroll();
  }
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
  }
 
}
