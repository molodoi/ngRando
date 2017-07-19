import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from './hike-filter.pipe';

import { HikeSummary } from './hike-summary.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ],
    declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe, HikeSummary ], //tous les composants que l'on va créer
    exports: [HikeListComponent],
    providers: [HikeService]
})
export class HikeModule{

}