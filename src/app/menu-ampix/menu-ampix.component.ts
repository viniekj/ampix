import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-ampix',
  templateUrl: './menu-ampix.component.html',
  styleUrls: ['./menu-ampix.component.css']
})
export class MenuAmpixComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

}
