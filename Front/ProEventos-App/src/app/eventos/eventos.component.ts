import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent implements OnInit {

public eventos: any;


constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getEventos();
  }


public getEventos():void{
  this.http.get('https://localhost:7226/api/eventos').subscribe(
    response => this.eventos = response,
    error => console.log(error)
  );
}
}
