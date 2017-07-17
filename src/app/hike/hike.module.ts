import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';

@NgModule({
    imports: [CommonModule],
    declarations: [HikeListComponent], //tous les composants que l'on va créer
    exports: [HikeListComponent],
    providers: [HikeService]
})
export class HikeModule{

}