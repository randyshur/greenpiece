import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Home Page!</h1>
    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      
     
      background-color: red;
      background-position: center ;
    }
  `]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
