import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { RegulationComponent } from './components/regulation/regulation.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ChampionshipComponent } from './components/championship/championship.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent, pathMatch: 'full'},
  {path: 'championships', component: ChampionshipComponent, pathMatch: 'full'},
  {path: 'tournament', component: TournamentComponent, pathMatch: 'full'},
  {path: 'tournament/:idTorneo', component: TournamentComponent, pathMatch: 'full'},
  {path: 'regulation', component: RegulationComponent, pathMatch: 'full'},
  { path: 'notFound', component: NotFoundComponent, pathMatch: 'full' },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
