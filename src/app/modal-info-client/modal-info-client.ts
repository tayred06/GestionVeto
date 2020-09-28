import { from } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal-page',
    templateUrl: 'modal-info-client.html',
    // styleUrls: ['./modal-info-client.scss']
})

export class modalInfoClient {
    @Input() unClient:Array<object>

    constructor() {}
    
}