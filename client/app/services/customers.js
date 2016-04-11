System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Customer, CustomersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Customer = (function () {
                function Customer(id, name, city) {
                    if (id === void 0) { id = 0; }
                    if (name === void 0) { name = ""; }
                    if (city === void 0) { city = ""; }
                    if (name != "") {
                        this.id = id;
                        this.name = name;
                        this.city = city;
                    }
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
            //The class CustomersService is a singleton that is initialized in app.ts, that is when the application is loaded
            //In the next lecture, CustomersService will be modified so that the customer data will be read from a server instead
            CustomersService = (function () {
                function CustomersService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append("Content-Type", "application/json");
                }
                //This method needs to return data through callbacks since HTTP requests may take some time to finish
                CustomersService.prototype.getCustomers = function (successCallback, errorCallback) {
                    var _this = this;
                    //If customers are already loaded, one can use these instead of loading them again
                    if (this.customers) {
                        successCallback(this.customers);
                        return;
                    }
                    this.http.get('/customers', { headers: this.headers }).subscribe(function (response) {
                        _this.customers = response.json();
                        successCallback(_this.customers);
                    }, function (response) {
                        errorCallback();
                    });
                };
                //This method needs to return data through callbacks since HTTP requests may take some time to finish
                CustomersService.prototype.getCustomer = function (id, successCallback, errorCallback) {
                    this.http.get('/customers/' + id, { headers: this.headers }).subscribe(function (response) {
                        successCallback(response.json());
                    }, function (response) {
                        errorCallback();
                    });
                };
                //This method needs to return data through callbacks since HTTP requests may take some time to finish
                CustomersService.prototype.addCustomer = function (name, city, successCallback, errorCallback) {
                    var _this = this;
                    this.http.post('/customers', JSON.stringify({ name: name, city: city }), { headers: this.headers }).subscribe(function (response) {
                        _this.customers.push(new Customer(+response.text(), name, city));
                        successCallback();
                    }, function (response) {
                        errorCallback();
                    });
                };
                CustomersService.prototype.deleteCustomer = function (id, successCallback, errorCallback) {
                    alert("Delete customer");
                    this.http.delete('/customers/' + id, { headers: this.headers }).subscribe(function (response) {
                        alert("Delete customer s");
                        successCallback();
                    }, function (response) {
                        alert(response.toString());
                        errorCallback();
                    });
                };
                CustomersService.prototype.editCustomer = function (id, name, city, successCallback, errorCallback) {
                    this.http.put('/customer', JSON.stringify({ id: id, name: name, city: city }), { headers: this.headers }).subscribe(function (response) {
                        alert("Here");
                        successCallback(response.json());
                    }, function (response) {
                        errorCallback(response.json());
                    });
                };
                CustomersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomersService);
                return CustomersService;
            }());
            exports_1("CustomersService", CustomersService);
        }
    }
});
//# sourceMappingURL=customers.js.map