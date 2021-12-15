import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/home/components/nav/nav.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { FilmsComponent } from './pages/home/components/films/films.component';
import { TopComponent } from './pages/home/components/top/top.component';
import { ButtonModule } from 'primeng/button';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselComponent } from './pages/home/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    TopComponent,

    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    Ng2CarouselamosModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
