import { Pipe, PipeTransform } from '@angular/core';

import { Hike } from './hike';

@Pipe({
    name: 'hikeFilter' // correspond à hikeFilter:searchTerm dans <div *ngFor="let hike of hikes | hikeFilter:searchTerm "> 
})
export class HikeFilterPipe implements PipeTransform {
    transform(value: Hike[], searchTerm: string = '') {
        if(searchTerm != '') {
            let result = value.filter( 
                (hike: Hike) => hike.description.toLowerCase().includes(searchTerm) 
                || hike.name.toLowerCase().includes(searchTerm) 
            );
            return result;
        } else {
            return value;
        }  
    }
}