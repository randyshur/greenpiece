import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">There is nothing better than growing edible gardens and enjoying the “fruits” of our labor. Here you will find a range of growing tips for edible plants, everything from classic herbs to your favorite fruits and vegetables. Whether you are just starting out or an experienced gardener, you are certain to find just what you’re looking for when it comes to edible gardening. Discover how to grow edible plants from beginning to end with gardening information that covers all the basics including design, preparation, planting, care, harvest and more.</h1>
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
