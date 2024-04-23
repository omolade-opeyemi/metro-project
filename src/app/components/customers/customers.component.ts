import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => active', [ // using status here for transition
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(0, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CustomersComponent implements OnInit {

  constructor() { }

  images:any[] = ['assets/images/Ellipse 7.png',
  'assets/images/teacher.png',
  'assets/images/Ellipse 7 (1).png']

  ngOnInit(): void {
    interval(5000).subscribe(() => {
      this.toggle();
  });
  }

  status= 'active';
  trigger(){
    this.status = 'active'
  }


  count = 1
  toggle(){
    const arrRotateRight= (a: any[],n: number) =>{while (n>0) {a.unshift(a.pop());n--;}return a;};
    if(this.count < 3){
      this.count ++
    }
    else{
      this.count = 1
    }
    this.images = arrRotateRight(this.images, 1)

    
  }

}
