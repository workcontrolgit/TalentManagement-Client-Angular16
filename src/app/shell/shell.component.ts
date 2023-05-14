import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
