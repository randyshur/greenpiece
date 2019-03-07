import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductsServiceService} from './products-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';


import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


import { ProductsComponent } from './products/products.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    AboutComponent,
    ContactComponent,

    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [ProductsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


