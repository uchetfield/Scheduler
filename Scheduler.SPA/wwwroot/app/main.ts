///<reference path="../../typings/globals/es6-shim/index.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);