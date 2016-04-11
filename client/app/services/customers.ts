//The classes Customer and CustomersService corresponds to the model in MVC and MVVM
import {Injectable} from 'angular2/core'
import {Http, Headers, Request, Response, RequestOptions, RequestMethod} from 'angular2/http'
import 'rxjs/add/operator/map'

export class Customer {
  public id:number;
  name:string;
  city:string;
  constructor(id:number=0, name:string="", city:string="") {
    if(name!="") {
      this.id = id;
      this.name=name;
      this.city=city;
    }
  }
}


//The class CustomersService is a singleton that is initialized in app.ts, that is when the application is loaded
//In the next lecture, CustomersService will be modified so that the customer data will be read from a server instead
@Injectable()
export class CustomersService {
  customers:Customer[];
  headers:Headers=new Headers();

  constructor(private http:Http) {
    this.headers.append("Content-Type", "application/json");
  }

  //This method needs to return data through callbacks since HTTP requests may take some time to finish
  getCustomers(successCallback, errorCallback) {
    //If customers are already loaded, one can use these instead of loading them again
    if(this.customers) {
      successCallback(this.customers);
      return;
    }
    this.http.get('/customers', {headers: this.headers}).subscribe((response) => {
      this.customers=response.json();
      successCallback(this.customers);
    }, (response) => {
      errorCallback();
    });
  }

  //This method needs to return data through callbacks since HTTP requests may take some time to finish
  getCustomer(id:number, successCallback, errorCallback) {
    this.http.get('/customers/'+id, {headers: this.headers}).subscribe((response) => {
      successCallback(response.json());
    }, (response) => {
      errorCallback();
    });
  }

  //This method needs to return data through callbacks since HTTP requests may take some time to finish
  addCustomer(name:string, city:string, successCallback, errorCallback) {
    this.http.post('/customers', JSON.stringify({name: name, city: city}), {headers: this.headers}).subscribe((response) => {
      this.customers.push(new Customer(+response.text(), name, city));
      successCallback();
    }, (response) => {
      errorCallback();
    });
  }

  deleteCustomer(id:number,successCallback,errorCallback){
    alert("Delete customer");
    this.http.delete('/customers/'+id,{headers:this.headers}).subscribe((response)=>{
          alert("Delete customer s");
      successCallback();
    },(response)=>{

            alert(response.toString());
        errorCallback();
    });
  }

  editCustomer(id:number,name:string,city:string,successCallback,errorCallback){

    this.http.put('/customer',JSON.stringify({id:id,name:name,city:city}),{headers:this.headers}).subscribe((response) =>{
      alert("Here");
      successCallback(response.json());

    },(response)=>{

      errorCallback(response.json());
    });
  }

}
