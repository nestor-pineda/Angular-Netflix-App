import { NetflixModel, Films } from './models/netflix-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public netflixModel: NetflixModel;
  public acctionFilms: Films;
  constructor() {
    this.netflixModel = {
      nav: {
        logo: {
          src: '../../../assets/img/LOGO/2560px-Netflix_2015_logo.svg.png',
          alt: 'Logo Netflix',
        },
        links: ['Home', 'TV Shows', 'Movies', 'Recently Added', 'My List'],
      },
      hero: {
        title: 'Top 10 populares',
        imgHero: {
          src: '../../../assets/img/Top10/1-papel.webp',
          alt: 'La casa de Papel',
        },
        description: 'Bla bla bla bla bla bla',
      },
      top: {
        title: 'Top 10',
        imgGallery: [
          {
            src: '../../../assets/img/Top10/1-papel.webp',
            alt: 'La casa de Papel',
            num: '1',
          },
          {
            src: '../../../assets/img/Top10/2-reina.webp',
            alt: 'Reina',
            num: '2',
          },
          {
            src: '../../../assets/img/Top10/3-titanes.webp',
            alt: 'Titanes',
            num: '3',
          },
        ],
      },
      films: {
        title: 'Terror',
        imgGallery: [
          {
            src: '../../../assets/img/Terror/apostol.jpg',
            alt: 'Apostol',
          },
          {
            src: '../../../assets/img/Terror/calleterror.jpg',
            alt: 'La Calle del Terror',
          },
          {
            src: '../../../assets/img/Terror/infiernoagua.webp',
            alt: 'Infierno Agua',
          },
        ],
      },
    };
    this.acctionFilms = {
      title: 'Action',
      imgGallery: [
        {
          src: '../../../assets/img/Accion/ejercitomuertos.jpg',
          alt: 'Ejercito Muertos',
        },
        {
          src: '../../../assets/img/Accion/elprotector.webp',
          alt: 'La Calle del Terror',
        },
        {
          src: '../../../assets/img/Accion/equalizer2.webp',
          alt: 'Infierno Agua',
        },
      ],
    };
  }

  ngOnInit(): void {}
}
