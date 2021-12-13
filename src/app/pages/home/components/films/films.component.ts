import { Films } from './../../models/netflix-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  @Input() public films!: Films;
  constructor() {}

  ngOnInit(): void {}
}
