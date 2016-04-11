import {Component, OnInit,OnChanges} from 'angular2/core';
import {Router} from 'angular2/router';

import {Customer, CustomersService} from '../services/customers';

@Component({
  templateUrl: 'app/templates/customers.html' //The template (view) of this component
})

//Component corresponds to the controller in MVC, or the view model in MVVM
export class CustomersComponent implements OnInit, OnChanges {
  customers:Customer[];
  status:string="loading customers";

  //Parameters of the constructor are inserted automatically by Angular 2
  //With private in front of a parameter, the parameter becomes a class member
  constructor(private customersService:CustomersService, private router:Router) {
    //Using callbacks instead of return values since it may take some time to retrieve the status/data
    customersService.getCustomers((customers) => {
      this.customers=customers;
      this.status="customers loaded";
    }, () => {
      this.status="error loading customers";
    });
  }

  onSelect(customer_id:number) {
    this.router.navigate(['CustomerPath', {id: customer_id}]);
  }

  //Using callbacks instead of return values since it may take some time to retrieve the status/data
  onNewCustomer(name:string, city:string) {
    this.customersService.addCustomer(name, city, () => {
      this.status="customer added";
    }, () => {
      this.status="error adding customer";
    });
  }

  onDelete(id:number){
    alert("Delete");
    this.customersService.deleteCustomer(id,(sucess)=>{
      for(var i = 0;i<this.customers.length;i++){
        if(this.customers[i].id==id){
          this.customers.splice(id,1);
        }
      }

    },(error)=>{

    });
  }

  ngOnInit() {}

  ngOnChanges(changes){
    alert("Changes!");
    this.customersService.getCustomers((customers) => {
      this.customers=customers;
      this.status="customers loaded";
    }, () => {
      this.status="error loading customers";
    });





  }
}
