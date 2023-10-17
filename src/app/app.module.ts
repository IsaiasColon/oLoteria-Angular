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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CartasComponent } from './pages/cartas/cartas.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
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
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
