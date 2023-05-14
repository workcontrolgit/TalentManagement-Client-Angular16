import { Component, OnInit } from '@angular/core';
import { PositionListComponent } from './list/position-list.component';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  standalone: true,
  imports: [PositionListComponent],
})
export class PositionComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit() {}
}
