import { Component } from '@angular/core';
import { delay1Animation, delay2Animation, delay3Animation, delay4Animation, delay5Animation, delay6Animation, fadeInAnimation } from 'src/app/services/animations/fade-in.animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[
    [fadeInAnimation],[delay1Animation],[delay2Animation],[delay3Animation],[delay4Animation],[delay5Animation],[delay6Animation]

  ] 
  
})
export class SidebarComponent {

}
