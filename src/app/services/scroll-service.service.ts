import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
