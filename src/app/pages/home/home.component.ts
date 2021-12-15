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
        imgHero: {
          src: '../../../assets/img/hero/narcos.jpg',
          alt: 'La casa de Papel',
        },
        imgTitle: {
          src: '../../../assets/img/hero/narcos-name.png',
          alt: 'La casa de Papel',
        },
        description:
          'Narcos is a television series developed by Netflix that focuses on the true story of a dangerous spread and spread of a cocaine network around the world during the 70s and 80s.',
      },
      top: {
        title: 'Top 10',
        imgGallery: [
          {
            src: '../../../../../assets/img/Top10/1-papel.webp',
            alt: 'La casa de Papel',
            num: '1',
          },
          {
            src: '../../../../../assets/img/Top10/10-gooddoctor.webp',
            alt: 'Good Doctor',
            num: '2',
          },
          {
            src: '../../../../../assets/img/Top10/2-reina.webp',
            alt: 'Reina',
            num: '3',
          },
          {
            src: '../../../../../assets/img/Top10/3-titanes.webp',
            alt: 'Titanes',
            num: '4',
          },
          {
            src: '../../../../../assets/img/Top10/4-lostinspace.webp',
            alt: 'Lost in Space',
            num: '5',
          },
          {
            src: '../../../../../assets/img/Top10/5-dondecaben.webp',
            alt: 'Donde Caben',
            num: '6',
          },
          {
            src: '../../../../../assets/img/Top10/6-aquinohay.webp',
            alt: 'Aquí no hay quien viva',
            num: '7',
          },
          {
            src: '../../../../../assets/img/Top10/7-blacklist.webp',
            alt: 'lack list',
            num: '8',
          },
          {
            src: '../../../../../assets/img/Top10/8-ricos.webp',
            alt: 'Ricos',
            num: '9',
          },
          {
            src: '../../../../../assets/img/Top10/9-poder.webp',
            alt: 'Poder',
            num: '10',
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
