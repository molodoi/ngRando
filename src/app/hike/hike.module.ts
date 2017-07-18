import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HikeListComponent, HikeDetailsComponent], //tous les composants que l'on va créer
    exports: [HikeListComponent],
    providers: [HikeService]
})
export class HikeModule{

}