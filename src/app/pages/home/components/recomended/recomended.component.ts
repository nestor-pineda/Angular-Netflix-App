import { Component, OnInit, Input } from '@angular/core';
import { RecomendedFilmsModel } from './../../models/netflix-model';
@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.scss'],
})
export class RecomendedComponent implements OnInit {
  @Input() public recomended!: RecomendedFilmsModel;
  constructor() {}

  ngOnInit(): void {}
}
