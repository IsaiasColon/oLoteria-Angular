import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { CartaPipe } from './pipes/carta.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';

//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';


import { CartasComponent } from './pages/cartas/cartas.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { JugadoresFormComponent } from './pages/jugadores/jugadores-form/jugadores-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SalasComponent } from './pages/salas/salas.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { TablaComponent } from './pages/tablas/tabla/tabla.component';
import { JugadorComponent } from './pages/jugadores/jugador/jugador.component';
import { SalaComponent } from './pages/salas/sala/sala.component';
import { CartaComponent } from './pages/cartas/carta/carta.component';
import { JuegoComponent } from './pages/juegos/juego/juego.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { TablasJugadorComponent } from './shared/tablas-jugador/tablas-jugador.component';
import { RolesFormComponent } from './pages/roles/roles-form/roles-form.component';
import { CommonModule } from '@angular/common';
import { TablasFormComponent } from './pages/tablas/tablas-form/tablas-form.component';
import { TablaSeguidaComponent } from './pages/tablas/components/tabla-seguida/tabla-seguida.component';
import { TablaAmbasComponent } from './pages/tablas/components/tabla-ambas/tabla-ambas.component';
import { TablaFloatComponent } from './pages/tablas/components/tabla-float/tabla-float.component';
import { TablaHorizontalComponent } from './pages/tablas/components/tabla-horizontal/tabla-horizontal.component';
import { TablaVerticalComponent } from './pages/tablas/components/tabla-vertical/tabla-vertical.component';
import { PosicionComponent } from './pages/tablas/components/posicion/posicion.component';
import { SalasFormComponent } from './pages/salas/salas-form/salas-form.component';
import { EntrarSalaDialogComponent } from './pages/salas/components/entrar-sala-dialog/entrar-sala-dialog.component';
import { MisTablasComponent } from './pages/salas/components/mis-tablas/mis-tablas.component';
import { JuegosFormComponent } from './pages/juegos/juegos-form/juegos-form.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartaPipe,
    NavbarComponent,
    LoginFormComponent,
    CartasComponent,
    JuegosComponent,
    JugadoresComponent,
    LoginComponent,
    RolesComponent,
    SalasComponent,
    TablasComponent,
    TablaComponent,
    JugadorComponent,
    SalaComponent,
    CartaComponent,
    JuegoComponent,
    PruebasComponent,
    TablasJugadorComponent,
    RolesFormComponent,
    JugadoresFormComponent,
    TablasFormComponent,
    TablaSeguidaComponent,
    TablaAmbasComponent,
    TablaFloatComponent,
    TablaHorizontalComponent,
    TablaVerticalComponent,
    PosicionComponent,
    SalasFormComponent,
    EntrarSalaDialogComponent,
    MisTablasComponent,
    JuegosFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    DragDropModule,
    MatTabsModule,
    MatDatepickerModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatChipsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
