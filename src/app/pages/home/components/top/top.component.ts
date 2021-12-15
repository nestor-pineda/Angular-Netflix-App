import { Component, Input, OnInit } from '@angular/core';
import { Top } from '../../models/netflix-model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  @Input() public top!: Top;
  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: 'https://picsum.photos/200/300' },
      { name: 'https://picsum.photos/id/237/200/300' },
      { name: 'https://picsum.photos/id/227/200/300' },
      { name: 'https://picsum.photos/id/137/200/300' },
      { name: 'https://picsum.photos/200/300' },
      { name: 'https://picsum.photos/id/237/200/300' },
      { name: 'https://picsum.photos/id/227/200/300' },
      { name: 'https://picsum.photos/id/137/200/300' },
      { name: 'https://picsum.photos/200/300' },
      { name: 'https://picsum.photos/id/237/200/300' },
      { name: 'https://picsum.photos/id/227/200/300' },
      { name: 'https://picsum.photos/id/137/200/300' },
      { name: 'https://picsum.photos/200/300' },
      { name: 'https://picsum.photos/id/237/200/300' },
      { name: 'https://picsum.photos/id/227/200/300' },
      { name: 'https://picsum.photos/id/137/200/300' },
      { name: 'https://picsum.photos/200/300' },
      { name: 'https://picsum.photos/id/237/200/300' },
      { name: 'https://picsum.photos/id/227/200/300' },
      { name: 'https://picsum.photos/id/137/200/300' },
      { name: 'https://picsum.photos/200/300' },
      { name: 'https://picsum.photos/id/237/200/300' },
      { name: 'https://picsum.photos/id/227/200/300' },
      { name: 'https://picsum.photos/id/137/200/300' },
    ];
  }

  ngOnInit(): void {}
}
