import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isCollapsed = false;

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  showMenu():boolean{
      return false;
  }

}
