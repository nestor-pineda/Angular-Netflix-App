import { Component, Input, OnInit } from '@angular/core';
import { Top } from '../../models/netflix-model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  @Input() public top!: Top;

  constructor() {}

  ngOnInit(): void {}
}
