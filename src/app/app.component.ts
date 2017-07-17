import { Component } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';

// https://angular.io/api/core/Component
@Component({
  moduleId: module.id,// id du fichier dans lequel ce composant est défini permet de ne pas définir de chemin relatif, le fichier suivra sont composant. 
  selector: 'my-app', // côté html on peut utiliser un tag html <my-app></my-app>
  //template: `<h1>Hello {{name}} !!</h1>`,// contenu du selector
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  name = 'Rando';
  

}
// Propriété @Component
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