System.register(['angular2/core', 'angular2/router', './components/menu', './components/customers', './components/customer', './services/customers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, menu_1, customers_1, customer_1, customers_2;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (customers_1_1) {
                customers_1 = customers_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            },
            function (customers_2_1) {
                customers_2 = customers_2_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/templates/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, menu_1.MenuComponent],
                        providers: [customers_2.CustomersService] //Create an instance of the CustomersService singleton. See services/customers.ts
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: customers_1.CustomersComponent, useAsDefault: true, as: "CustomersPath" },
                        { path: '/customer', component: customer_1.CustomerComponent, as: "CustomerPath" },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map