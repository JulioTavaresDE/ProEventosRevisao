import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { EventosComponent } from "./eventos/eventos.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PalestrantesComponent, EventosComponent,HttpClientModule]
})
export class AppComponent {
  title = 'ProEventos-App';
}