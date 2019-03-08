import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
  rowHeight: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // private LOGO = require("../assets/aNiceGarden.jpg");

  constructor() { }

  ngOnInit() {
  }

}
