

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../../../models/Evento';
import { EventoService } from '../../../services/evento.service';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-evento-listagem',
  standalone: true,
  imports: [CommonModule,CollapseModule,FormsModule,TooltipModule,BsDropdownModule,ToastrModule],
  templateUrl: './evento-listagem.component.html',
  styleUrl: './evento-listagem.component.scss'
})
export class EventoListagemComponent implements OnInit {

modalRef?: BsModalRef;
public eventos: Evento[] = [];
public eventosFiltrados: Evento[] = [];
public widthImg : number = 200;
public marginImg: number  = 2 ;
public mostrarImagem:boolean = true;
private _filtroLista: string = '';

public get filtroLista():string{
  return this._filtroLista;
}

public set filtroLista(value:string) {
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista):this.eventos;
}

public filtrarEventos(filtrarPor:string):Evento[] {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
   (evento:{ tema:string;local:string; })=> evento.tema.toLocaleLowerCase().indexOf(filtrarPor)!== - 1 ||
    evento.local.toLocaleLowerCase().indexOf(filtrarPor)!== -1
  );
}


public alterarImagem():void{
  this.mostrarImagem = !this.mostrarImagem;
}

constructor(private eventoService:EventoService,
            private modalService: BsModalService
            //private spinner: NgxSpinnerService
  ) {}
  public ngOnInit(): void {
    this.getEventos();

  }


public getEventos():void{
  this.eventoService.getEventos().subscribe({
  next: (_eventos:Evento[]) => {
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
      },
      error: (error:any) => console.log(error)
    });
  }


  openModal(template: TemplateRef<void>) :void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }

}
