import { EventoListagemComponent } from './components/eventos/evento-listagem/evento-listagem.component';
import { Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { Component } from '@angular/core';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const routes: Routes = [
{
  path:'eventos', component:EventosComponent,
  children:[
    {path:'detalhe/:id',component:EventoDetalheComponent },
    {path:'detalhe',component:EventoDetalheComponent },
    {path:'lista',component:EventoListagemComponent },
  ]
},

{path:'dashboard',component:DashboardComponent },
{path:'palestrantes',component:PalestrantesComponent },
{path:'contatos',component:ContatosComponent },
{path:'perfil',component:PerfilComponent },
{path:'', redirectTo: 'dashboard', pathMatch:'full' },
{path:'**', redirectTo: 'dashboard', pathMatch:'full' },
];
