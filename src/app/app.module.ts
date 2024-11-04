import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { DieComponent } from './die/die.component';
import { FinalizarDialogoComponent } from './finalizar-dialogo/finalizar-dialogo.component';

const routes: Routes = [
  { path: 'jugar', component: JuegoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'jugar' }
];

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    DieComponent,
    FinalizarDialogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
