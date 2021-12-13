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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    TopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
