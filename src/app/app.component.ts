import { Component } from '@angular/core';
import { Hike } from './shared/hike';

// https://angular.io/api/core/Component
@Component({
  moduleId: module.id,// id du fichier dans lequel ce composant est défini permet de ne pas définir de chemin relatif, le fichier suivra sont composant. 
  selector: 'my-app', // côté html on peut utiliser un tag html <my-app></my-app>
  //template: `<h1>Hello {{name}} !!</h1>`,// contenu du selector
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  name = 'Rando';
  hikes: Hike[];

  constructor(){
    this.hikes = [
      {
        "name": "Saint-Aubin-du-Cormier",
        "region": "Bretagne",
        "area": "Ille-et-Vilaine",
        "startingPoint": "Plan d'eau",
        "distance": 12.8,
        "distanceUnit": "km",
        "duration": 240,
        "heightDifference": 267,
        "description": "Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade",
        "evaluation": [4, 5, 3]
      },
      {
        "name": "Vallée du Couesnon",
        "region": "Bretagne",
        "area": "Ille-et-Vilaine",
        "startingPoint": "Château de la ville olivier",
        "distance": 15.6,
        "distanceUnit": "km",
        "duration": 270, 
        "heightDifference": 200,
        "description": "Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée ",
        "evaluation": [5, 5]
      }
    ]
  } 

}

// Proprité @Component
// Animations - liste des animations de ce composant
// ChangeDetection - stratégie de détection de changement utilisée par ce composant
// Stratégie d'encapsulation style encapsulation utilisée par ce composant
// EntryComponents - liste des composants qui sont insérés dynamiquement dans la vue de ce composant
// ExportAs - nom sous lequel l'instance de composant est exportée dans un modèle
// Hôte - carte de propriété de classe pour héberger des liaisons d'éléments pour des événements, des propriétés et des attributs
// Entrées - liste des noms de propriété de classe à la liaison de données en tant qu'entrées de composant
// Interpolation - marqueurs d'interpolation personnalisés utilisés dans le modèle de ce composant
// ModuleId - ES / module CommonJS id du fichier dans lequel ce composant est défini
// Outputs - liste des noms de propriété de classe qui exposent les événements de sortie auxquels d'autres peuvent s'abonner
// Fournisseurs - liste des fournisseurs disponibles pour cette composante et ses enfants
// Requêtes - configurez les requêtes qui peuvent être injectées dans le composant
// Sélecteur - Sélecteur css qui identifie ce composant dans un modèle
// StyleUrls - liste des URL pour les feuilles de style à appliquer à la vue de ce composant
// Styles - styles définis en ligne à appliquer à la vue de ce composant
// Modèle - modèle défini en ligne pour la vue
// TemplateUrl - url vers un fichier externe contenant un modèle pour la vue
// ViewProviders - liste des fournisseurs disponibles pour ce composant et sa vision des enfants