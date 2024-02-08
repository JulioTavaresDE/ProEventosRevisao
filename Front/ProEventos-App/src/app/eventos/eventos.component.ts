import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule,CollapseModule,FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent implements OnInit {

public eventos: any = [];
public eventosFiltrados: any = [];
widthImg : number = 200;
marginImg: number  = 2 ;
mostrarImagem:boolean = true;
private _filtroLista: string = '';

public get filtroLista():string{
  return this._filtroLista;
}

public set filtroLista(value:string) {
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista):this.eventos;
}

filtrarEventos(filtrarPor:string):any {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
   (evento:{ tema:string;local:string; })=> evento.tema.toLocaleLowerCase().indexOf(filtrarPor)!== - 1 ||
    evento.local.toLocaleLowerCase().indexOf(filtrarPor)!== -1
  );
}


alterarImagem(){
  this.mostrarImagem = !this.mostrarImagem;
}

constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getEventos();
  }


public getEventos():void{
  this.http.get('https://localhost:7226/api/eventos').subscribe(
    response => {
      this.eventos = response;
      this.eventosFiltrados = this.eventos;
    },
    error => console.log(error)
  );
}
}
