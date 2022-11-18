import { Component, OnInit } from '@angular/core';
import { faDiscord, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'eden-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    readonly faDiscord = faDiscord;
    readonly faPatreon = faPatreon;
    readonly faBagShopping = faBagShopping;
    readonly faArrowRight = faArrowRight;

    constructor() {
    }

    ngOnInit(): void {
    }

    randomImageStyles(allowFlip: boolean = true) {
        const bottom = Math.floor(Math.random() * 100);
        const flip = allowFlip && Math.random() < 0.5;
        const styles = {
            left: Math.floor(Math.random() * 90) + '%',
            bottom: bottom === 0 ? '0' : `-${bottom}px`
        }

        if (flip) {
            styles['transform'] = 'scaleX(-1)'
        }

        return styles;
    }

    get jimboStyles() {
        return this.randomImageStyles();
    }

    get hikariStyles() {
        return this.randomImageStyles();
    }

    get aryaStyles() {
        return this.randomImageStyles();
    }

    get mariaStyles() {
        return this.randomImageStyles(false);
    }

    get zerxiStyles() {
        return this.randomImageStyles();
    }

}
