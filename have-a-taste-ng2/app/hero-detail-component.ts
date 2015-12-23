/**
 * Created by Jackey on 2015/12/23.
 */
import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id:</label>{{hero.id}}</div>
            <label>name:</label>
            <div>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>`,
    inputs: ['hero']
})

export class HeroDetailComponent {
    public hero:Hero;
}