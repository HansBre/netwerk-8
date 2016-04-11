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
    var CustomersComponent;
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
            CustomersComponent = (function () {
                //Parameters of the constructor are inserted automatically by Angular 2
                //With private in front of a parameter, the parameter becomes a class member
                function CustomersComponent(customersService, router) {
                    var _this = this;
                    this.customersService = customersService;
                    this.router = router;
                    this.status = "loading customers";
                    //Using callbacks instead of return values since it may take some time to retrieve the status/data
                    customersService.getCustomers(function (customers) {
                        _this.customers = customers;
                        _this.status = "customers loaded";
                    }, function () {
                        _this.status = "error loading customers";
                    });
                }
                CustomersComponent.prototype.onSelect = function (customer_id) {
                    this.router.navigate(['CustomerPath', { id: customer_id }]);
                };
                //Using callbacks instead of return values since it may take some time to retrieve the status/data
                CustomersComponent.prototype.onNewCustomer = function (name, city) {
                    var _this = this;
                    this.customersService.addCustomer(name, city, function () {
                        _this.status = "customer added";
                    }, function () {
                        _this.status = "error adding customer";
                    });
                };
                CustomersComponent.prototype.onDelete = function (id) {
                    var _this = this;
                    alert("Delete");
                    this.customersService.deleteCustomer(id, function (sucess) {
                        for (var i = 0; i < _this.customers.length; i++) {
                            if (_this.customers[i].id == id) {
                                _this.customers.splice(id, 1);
                            }
                        }
                    }, function (error) {
                    });
                };
                CustomersComponent.prototype.ngOnInit = function () { };
                CustomersComponent.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    alert("Changes!");
                    this.customersService.getCustomers(function (customers) {
                        _this.customers = customers;
                        _this.status = "customers loaded";
                    }, function () {
                        _this.status = "error loading customers";
                    });
                };
                CustomersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/customers.html' //The template (view) of this component
                    }), 
                    __metadata('design:paramtypes', [customers_1.CustomersService, router_1.Router])
                ], CustomersComponent);
                return CustomersComponent;
            }());
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});
//# sourceMappingURL=customers.js.map