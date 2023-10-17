
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { TablaComponent } from './pages/tablas/tabla/tabla.component';
import { RolesComponent } from './pages/roles/roles.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { JugadorComponent } from './pages/jugadores/jugador/jugador.component';
import { SalasComponent } from './pages/salas/salas.component';
import { SalaComponent } from './pages/salas/sala/sala.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { CartaComponent } from './pages/cartas/carta/carta.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { JuegoComponent } from './pages/juegos/juego/juego.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
  
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tablas', component: TablasComponent },
  { path: 'tablas/:id', component: TablaComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugadores/:id', component: JugadorComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'salas/:id', component: SalaComponent },
  { path: 'cartas', component: CartasComponent },
  { path: 'cartas/:id', component: CartaComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'juegos/:id', component: JuegoComponent },
  { path: 'pruebas', component: PruebasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
  
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: [] 
}) 
export class AppRoutingModule { } 