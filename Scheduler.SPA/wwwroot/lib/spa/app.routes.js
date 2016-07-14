"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
//import { UserListComponent } from './users/user-list.component';
//import { ScheduleRoutes } from './schedules/schedule.routes';
exports.routes = [
    //...ScheduleRoutes,
    //{ path: 'users', component: UserListComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
