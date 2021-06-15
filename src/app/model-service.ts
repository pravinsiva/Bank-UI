import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ModelService {
    theme: string = 'light';
    constructor(
        private overlay: OverlayContainer
    ) {

    }
    themeChange() {
        if (this.theme === 'light') {
            this.theme = 'dark';
            this.overlay.getContainerElement().classList.add('dark-theme');
        } else {
            this.theme = 'light';
            this.overlay.getContainerElement().classList.add('light-theme');
        }

    }
}