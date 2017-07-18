import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'hike-details.component.html'
})
export class HikeDetailsComponent implements OnInit {

    title:string;

    constructor(private _route:ActivatedRoute, private _router: Router){}

    goBack() {
        // EventBinding Click
        this._router.navigate(['/hikes']);
    }

    ngOnInit(){
        let id = this._route.snapshot.params['id'];
        this.title = `Détail de la randonnée ${id}`;        
    }

}