import { Component, OnInit } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
    ];
  }
}
