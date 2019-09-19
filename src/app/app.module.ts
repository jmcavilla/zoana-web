import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { CardCarouselComponent } from './components/common/card-carousel/card-carousel.component';
import { TableComponent } from './components/tournament/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { FormsModule } from '@angular/forms';
import { CountryFlagPipe } from './pipes/country-flag.pipe';
import { RegulationComponent } from './components/regulation/regulation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    TournamentComponent,
    CardCarouselComponent,
    TableComponent,
    OrderByPipe,
    CapitalizadoPipe,
    PositionPipe,
    CountryFlagPipe,
    RegulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
