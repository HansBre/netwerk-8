import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {MenuComponent} from './components/menu';
import {CustomersComponent} from './components/customers';
import {CustomerComponent} from './components/customer';
import {CustomersService} from './services/customers';

@Component({
  selector: 'app', //Makes it possible to use <app> to insert this component. See index.html
  templateUrl: 'app/templates/app.html', //The template (view) of this component
  directives: [ROUTER_DIRECTIVES, MenuComponent], //Makes it possible to use the <router-outlet> and <app-menu> directives in the view. See app.html. 
  providers: [CustomersService] //Create an instance of the CustomersService singleton. See services/customers.ts
})

//Define the various routes
@RouteConfig([
  {path: '/', component: CustomersComponent, useAsDefault: true, as: "CustomersPath"},
  {path: '/customer', component: CustomerComponent, as: "CustomerPath"},
])

//The top level component
export class App { }
