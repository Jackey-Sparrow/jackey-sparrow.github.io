/**
 * Created by Jackey on 2015/12/23.
 */
import {Component,OnInit} from 'angular2/core';
import {Hero} from './services/hero';
import {HeroDetailComponent} from './components/hero-detail-component';
import {HeroService} from './services/hero-service';

@Component({
    selector: 'my-app',
    template: `
         <h1>{{title}}</h1>
         <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        <h2>heros:</h2>
        <h3 *ngIf="selectedHero">selected hero:{{selectedHero.name}}</h3>
        <ul>
            <li [class.selected]="hero===selectedHero" *ngFor="#hero of heros" (click)="onSelect(hero)">
                <span>{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        `,
    styles: [`
       .selected { background-color: #EEE; color: #369; }
    `],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {

    title:string;
    heros:Hero[];
    selectedHero:Hero;

    constructor(private _heroService:HeroService) {
        this.title = 'Tour of Heroes';
    }

    getHeros() {
        this._heroService.getHeros().then(heros=>this.heros = heros);
    }

    ngOnInit() {
        this.getHeros();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

}