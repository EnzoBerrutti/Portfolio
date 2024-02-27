import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes} from '@angular/animations';


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
  ]
})
export class MySectionComponent implements OnInit{

  state:string = 'inactive';



  constructor(){}
  ngOnInit(): void {
    setInterval(()=>{
      if(this.state == 'active'){
        this.state = 'inactive'

      }else{
        this.state = 'active'
      }
    },1500);

   
    
      
  }

}
