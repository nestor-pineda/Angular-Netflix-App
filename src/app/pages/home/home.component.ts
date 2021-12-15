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
  public comedyFilms: Films;
  public dramaFilms: Films;

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
          {
            src: '../../../assets/img/Terror/insidious2.webp',
            alt: 'Insidouus 2',
          },
          {
            src: '../../../assets/img/Terror/life.webp',
            alt: 'Life',
          },
          {
            src: '../../../assets/img/Terror/malasana.webp',
            alt: 'Malasaña',
          },
          {
            src: '../../../assets/img/Terror/multiple.webp',
            alt: 'Multiple',
          },
          {
            src: '../../../assets/img/Terror/reflejos.webp',
            alt: 'Reflejos',
          },
          {
            src: '../../../assets/img/Drama/unicosuperviviente.webp',
            alt: 'Infierno',
          },
          {
            src: '../../../assets/img/Terror/insidious2.webp',
            alt: 'Insidouus 2',
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
        {
          src: '../../../assets/img/Accion/heat.webp',
          alt: 'Heat',
        },
        {
          src: '../../../assets/img/Accion/jackreacher.webp',
          alt: 'Jack Reacher',
        },
        {
          src: '../../../assets/img/Accion/johnwick2.webp',
          alt: 'John Wick 2',
        },
        {
          src: '../../../assets/img/Accion/killbill2.webp',
          alt: 'Kill Bill 2',
        },
        {
          src: '../../../assets/img/Accion/misionimposiblenacion.webp',
          alt: 'Mision Imposible',
        },
        {
          src: '../../../assets/img/Accion/renacido.webp',
          alt: 'Renacido',
        },
        {
          src: '../../../assets/img/Accion/terminator2.webp',
          alt: 'Terminator 2',
        },
        {
          src: '../../../assets/img/Accion/worldwarz.webp',
          alt: 'World War Z',
        },
      ],
    };
    this.comedyFilms = {
      title: 'Comedy',
      imgGallery: [
        {
          src: '../../../assets/img/Comedia/casi300.webp',
          alt: 'Casi 300',
        },
        {
          src: '../../../assets/img/Comedia/cazafantasmas.webp',
          alt: 'Caza Fantasmas',
        },
        {
          src: '../../../assets/img/Comedia/dictador.webp',
          alt: 'Dictador',
        },
        {
          src: '../../../assets/img/Comedia/erasehollywood.webp',
          alt: 'Erasé una vez Hollywood',
        },
        {
          src: '../../../assets/img/Comedia/juerga.webp',
          alt: 'Juerga',
        },
        {
          src: '../../../assets/img/Comedia/laterminal.webp',
          alt: 'La Terminal',
        },
        {
          src: '../../../assets/img/Comedia/padresella.webp',
          alt: 'Los padres de Ella',
        },
        {
          src: '../../../assets/img/Comedia/regresofuturo.webp',
          alt: 'Regreso al Futuro',
        },
        {
          src: '../../../assets/img/Comedia/rickandmorty.webp',
          alt: 'Rick and Morty',
        },
        {
          src: '../../../assets/img/Comedia/scarymovie3.webp',
          alt: 'Scary Movie 3',
        },
        {
          src: '../../../assets/img/Comedia/ted2.webp',
          alt: 'Ted 2',
        },
      ],
    };
    this.dramaFilms = {
      title: 'Drama',
      imgGallery: [
        {
          src: '../../../assets/img/Drama/1917.webp',
          alt: '1917',
        },
        {
          src: '../../../assets/img/Drama/arrival.webp',
          alt: 'Arrival',
        },
        {
          src: '../../../assets/img/Drama/clublucha.webp',
          alt: 'El Club de la Lucha',
        },
        {
          src: '../../../assets/img/Drama/corazones.webp',
          alt: 'Corazones',
        },
        {
          src: '../../../assets/img/Drama/culpable.jpg',
          alt: 'Culpable',
        },
        {
          src: '../../../assets/img/Drama/millaverde.webp',
          alt: 'La Milla Verde',
        },
        {
          src: '../../../assets/img/Drama/naufrago.webp',
          alt: 'Naufrago',
        },
        {
          src: '../../../assets/img/Drama/noespais.webp',
          alt: 'No es País para viejos',
        },
        {
          src: '../../../assets/img/Drama/salvaralsoldado.webp',
          alt: 'Salvar al soldado Ryan',
        },
        {
          src: '../../../assets/img/Drama/scarface.webp',
          alt: 'Sacreface',
        },
        {
          src: '../../../assets/img/Drama/schindler.webp',
          alt: 'La lista de Schindler',
        },
        {
          src: '../../../assets/img/Drama/sombradiablo.webp',
          alt: 'La sombra del diablo',
        },
      ],
    };
  }

  ngOnInit(): void {}
}
