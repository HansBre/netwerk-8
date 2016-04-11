import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Customer, CustomersService} from '../services/customers';

@Component({
  templateUrl: 'app/templates/customer.html' //The template (view) of this component
})

//Component corresponds to the controller in MVC, or the view model in MVVM
export class CustomerComponent implements OnInit {
  customer:Customer=new Customer();
  status:string="loading customer";

  //Parameters of the constructor are inserted automatically by Angular 2
  constructor(private customersService:CustomersService, params:RouteParams) {
    //Using callbacks instead of return values since it may take some time to retrieve the status/data
    customersService.getCustomer(+params.get('id'), (customer:Customer) => { //'+'converts to int, parseInt is bugged
      this.customer=customer;
      this.status="customer loaded";
    }, () => {
      this.status="error loading customer";
    });
  }



  onEditCustomer(name:string,city:string){
    alert("Edit customer" + name);
    this.customersService.editCustomer(this.customer.id,name,city,(sucess)=>{
    alert("Sucess!");
    this.customer.name =sucess.name;
    this.customer.city = sucess.city;

  },(error)=>{
    alert("Error");

  });
}


  ngOnInit() {}
}
