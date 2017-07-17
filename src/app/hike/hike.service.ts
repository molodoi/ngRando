import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hike } from './hike';

// import des operateurs rxjs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// Injectable est obligatoire unqiument quand on injecte dans le constructeur d'un service un autre service.
// par convention, on recommande de toujours décorer un service avec @Injectable, même si on n'injecte rien dans le constructeur de notre service 
@Injectable()
export class HikeService{

    constructor( private _http:Http ) {

    }

    // getHikes(){
    //     return this.hikes;
    // }

    getHikesFromApi(){
        return this._http.get('app/api/hikes.json')
            // Permet de faire/vérifier des chose au passage
            // Inscrire une action pour prendre en compte une variété d'événements de cycle de vie observables
            // http://reactivex.io/documentation/operators/do.html
            .do(x => console.log(x))
            // Transforme notre Observable de response en json 
            // Transformer les éléments émis par un Observable en appliquant une fonction à chaque élément
            // http://reactivex.io/documentation/operators/map.html
            .map(hikes => hikes.json());
    }

}