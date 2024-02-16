import { Router } from '@angular/router';
import { routes } from './../../app.routes';
import { Component, Input, OnInit, input } from '@angular/core';
//import { Input } from 'reactstrap';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
   @Input() titulo: string | undefined;
  // @Input() iconClass = 'fa fa-user';
  // @Input() subtitulo = 'Desde 2021';
  //@Input() botaoListar = false;
  constructor(private router: Router) { }

  ngOnInit():void {}

  listar():void{
    this.router.navigate([`/${this.titulo?.toLocaleLowerCase()}/lista`]);
  }
}
