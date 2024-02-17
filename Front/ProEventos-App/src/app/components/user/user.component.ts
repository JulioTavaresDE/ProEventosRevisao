
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  OnInit, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(
    private router: Router
) {}
}
