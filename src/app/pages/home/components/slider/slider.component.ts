import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
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
    ];
  }
}
