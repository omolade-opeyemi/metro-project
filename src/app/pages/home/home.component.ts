import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => active', [ // using status here for transition
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  modalService: any;

  constructor() { }

  ngOnInit(): void {
  }

  allPlans =[
    {name : 'Free plan', amount: 0.00, membership_benefits : ['Good benefits', 'Good benefits', 'Good benefits'], title: '' },
    {name : 'Premium plan', amount: 4500.00, membership_benefits : ['Nice benefits', 'Nice benefits', 'Nice benefits'], title: '' },
    {name : 'Gold plan', amount: 10000.00, membership_benefits : ['Good benefits', 'Nice benefits', 'Good benefits'], title: '' },
    {name : 'New plan', amount: 15000.00, membership_benefits : ['Fat benefits', 'Awesome benefits', 'Awesome benefits'], title: '' },
  ]

  images = ['assets/images/carousel1.jpg', 
  'assets/images/carousel2.webp',
  'assets/images/carousel4.webp',
  'assets/images/carousewl3.webp'];


  status= 'active';
  trigger(){
    this.status = 'active'
  }
  slide :any = 0;
  prev: number = 0
  next : number = 1
  onSlide(slideEvent: NgbSlideEvent) {
    if(slideEvent){
      if(this.slide < 3){
        this.slide ++
      }
      else{
        this.slide = 0;

      }
    }

  }
}
