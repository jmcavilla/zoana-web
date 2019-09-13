import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentComponent } from './components/tournament/tournament.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent, pathMatch: 'full'},
  {path: 'tournament', component: TournamentComponent, pathMatch: 'full'},
  {path: 'tournament/:idTorneo', component: TournamentComponent, pathMatch: 'full'},
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
