import { Component } from '@angular/core';

import { Hike } from './hike';
import { HikeService } from './hike.service';

@Component({
    moduleId: module.id,
    selector: 'lm-hike-list', //<lm-hike-list></lm-hike-list>
    templateUrl: 'hike-list.component.html'
})
export class HikeListComponent{

    hikes: Hike[];
    searchTerm: string;
    //private _hikeService: HikeService;

    // Dans un constructeur, on ne doit jamais faire d'opération couteuse comme un appelle à un service. 
    // Le constructeur sert uniquement à créer un objet et à définir son état en initialisant des variables représentatnt cet état à l'aide de variables éventuellemnt passées en paramètre dudit constructeur. Faire davantage dans un constructeur est souvent source de regrets plus tard ; )
    constructor( private _hikeService: HikeService ){
        //this._hikeService = _hikeService;
        //this.hikes = this._hikeService.getHikes();
    } 



    ngOnInit(){
        //this.hikes = this._hikeService.getHikes();
        this._hikeService.getHikesFromApi()
        .subscribe(
            res => this.hikes = res,
            err => console.error(err.status)
        );

        //console.log(this.hikes);
    }
}