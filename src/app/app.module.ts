import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component'; // Composant racine le plus haut dans la hierarchie de composants
import { HikeModule }  from './hike/hike.module';
import { HomeModule }  from './home/home.module';
import { ContactModule }  from './contact/contact.module';

import { HomeComponent }  from './home/home.component';
import { HikeListComponent }  from './hike/hike-list.component';
import { HikeDetailsComponent }  from './hike/hike-details.component';
import { ContactUsComponent }  from './contact/contact-us.component';
import { PageNotFoundComponent }  from './page-not-found.component';

@NgModule({ //NgModule decorator and metadata.
  imports:      [
    BrowserModule,
    HikeModule, 
    HttpModule, 
    HomeModule, 
    ContactModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'hikes', component: HikeListComponent },
      { path: 'hike/:id', component: HikeDetailsComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]) 
  ],//Spécifie une liste de modules dont les directives / pipes exportés devraient être disponibles pour les modèles de ce module. Cela peut également contenir ModuleWithProviders
  declarations: [ AppComponent, PageNotFoundComponent ], // Spécifie une liste de directives / pipes qui appartiennent à ce module.
  bootstrap:    [ AppComponent ]  // Définit les composants qui doivent être amortis lorsque ce module est amorti. Les composants répertoriés ici seront automatiquement ajoutés à entryComponents
})
export class AppModule { }

//https://github.com/codeconcept/rando
