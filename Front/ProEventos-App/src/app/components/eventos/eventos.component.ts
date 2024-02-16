import { DateTimeFormatPipe } from '../../helpers/DateTimeFormat.pipe';
import { Constants } from '../../util/constants';
import { EventoService } from '../../services/evento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/Evento';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { TituloComponent } from '../../shared/titulo/titulo.component';
import { RouterOutlet } from '@angular/router';
//import { AppModule } from '../../app.module';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule,CollapseModule,FormsModule,TooltipModule,BsDropdownModule,ToastrModule,RouterOutlet],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  providers:[EventoService,DateTimeFormatPipe,BsModalService,BsModalRef]

})
export class EventosComponent implements OnInit {
  ngOnInit(): void {

  }
}
