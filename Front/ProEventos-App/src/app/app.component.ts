import { Component, NgModule, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { EventosComponent } from "./eventos/eventos.component";
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    //imports: [RouterOutlet, PalestrantesComponent, EventosComponent,HttpClientModule,NavComponent,BrowserAnimationsModule,CollapseModule]
    imports: [RouterOutlet, PalestrantesComponent, EventosComponent,HttpClientModule,NavComponent]

  })
export class AppComponent {
  title = 'ProEventos-App';
}
