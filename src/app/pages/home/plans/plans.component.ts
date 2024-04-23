import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  @Input() plan: any;

  constructor() { }

  ngOnInit(): void {
  }

}
