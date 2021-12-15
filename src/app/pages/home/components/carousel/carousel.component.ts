import { Component, OnInit, Input } from '@angular/core';
import { Top } from '../../models/netflix-model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() public top!: Top;
  constructor() {}

  ngOnInit(): void {}
}
