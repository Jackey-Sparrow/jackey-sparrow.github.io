/**
 * Created by Jackey on 2015/12/23.
 */
import {Component, provide}    from 'angular2/core'
import {bootstrap}    from 'angular2/platform/browser'
import {
    APP_BASE_HREF,
    Location,
    Router,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig
    }  from 'angular2/router'
import {AppComponent} from './home/app.component.ts'
import {AboutComponent} from './about/about'

@Component({
    selector: 'hi-hi',
    template: `
        <div>
             <div class='header-container'>
                <ul>
                    <li><a  class="logo"><img src="./app/common/content/images/logo.png"/></a></li>
                    <li class="nav-tab active">
                        <a [routerLink]="['./Home']">Home</a>
                    </li>
                    <li class="nav-tab">
                        <a [routerLink]="['./About']">About</a>
                    </li>
                </ul>
            </div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {'path': '/Home', 'component': AppComponent,as:'Home'},
    {'path': '/About', 'component': AboutComponent,as:'About'}
])


class AppCmp {
    constructor(router:Router) {
        var instruction = router.generate(['/Home']);
        router.navigateByInstruction(instruction);
    }
}

bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'})
]);
