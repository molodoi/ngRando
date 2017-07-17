import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HikeModule }  from './hike/hike.module';
import { AppComponent }  from './app.component'; // Composant racine le plus haut dans la hierarchie de composants

@NgModule({ //NgModule decorator and metadata.
  imports:      [ BrowserModule, HikeModule, HttpModule ],//Spécifie une liste de modules dont les directives / pipes exportés devraient être disponibles pour les modèles de ce module. Cela peut également contenir ModuleWithProviders
  declarations: [ AppComponent ], // Spécifie une liste de directives / pipes qui appartiennent à ce module.
  bootstrap:    [ AppComponent ]  // Définit les composants qui doivent être amortis lorsque ce module est amorti. Les composants répertoriés ici seront automatiquement ajoutés à entryComponents
})
export class AppModule { }
