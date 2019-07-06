import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profit-card',
  templateUrl: './profit-card.component.html',
  styleUrls: ['./profit-card.component.scss']
})
export class ProfitCardComponent implements OnInit {

  flipped = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
