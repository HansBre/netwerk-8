System.register(['angular2/core', 'angular2/router', '../services/customers'], function(exports_1, context_1) {
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
    var core_1, router_1, customers_1;
    var CustomerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customers_1_1) {
                customers_1 = customers_1_1;
            }],
        execute: function() {
            CustomerComponent = (function () {
                //Parameters of the constructor are inserted automatically by Angular 2
                function CustomerComponent(customersService, params) {
                    var _this = this;
                    this.customersService = customersService;
                    this.customer = new customers_1.Customer();
                    this.status = "loading customer";
                    //Using callbacks instead of return values since it may take some time to retrieve the status/data
                    customersService.getCustomer(+params.get('id'), function (customer) {
                        _this.customer = customer;
                        _this.status = "customer loaded";
                    }, function () {
                        _this.status = "error loading customer";
                    });
                }
                CustomerComponent.prototype.onEditCustomer = function (name, city) {
                    var _this = this;
                    alert("Edit customer" + name);
                    this.customersService.editCustomer(this.customer.id, name, city, function (sucess) {
                        alert("Sucess!");
                        _this.customer.name = sucess.name;
                        _this.customer.city = sucess.city;
                    }, function (error) {
                        alert("Error");
                    });
                };
                CustomerComponent.prototype.ngOnInit = function () { };
                CustomerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/customer.html' //The template (view) of this component
                    }), 
                    __metadata('design:paramtypes', [customers_1.CustomersService, router_1.RouteParams])
                ], CustomerComponent);
                return CustomerComponent;
            }());
            exports_1("CustomerComponent", CustomerComponent);
        }
    }
});
//# sourceMappingURL=customer.js.map