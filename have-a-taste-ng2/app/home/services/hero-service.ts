/**
 * Created by Jackey on 2015/12/23.
 */
import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {HEROS} from './heros-source.ts';

@Injectable()
export class HeroService {
    getHeros() {
        return Promise.resolve(HEROS);
    }

    getHeroesSlowly() {
        return new Promise(resolve=>
                setTimeout(()=>resolve(HEROS), 2000)
        );
    }
}