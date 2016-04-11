'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var nextCustomerId=1;
class Customer {
  constructor(name, city) {
    if(name!="") {
      this.id = nextCustomerId++;
      this.name=name;
      this.city=city;
    }
  }
}

//This resource makes it possible to download and start the Angular 2 client
app.use(express.static(__dirname + "/../client"));

//Make app automatically parse json content
app.use(bodyParser.json());

var customers=[];
customers.push(new Customer("Ola", "Trondheim"));
customers.push(new Customer("Kari", "Oslo"));
customers.push(new Customer("Per", "Tromsø"));


//Get all customers
app.get('/customers', (request, response) => {
  //sending for instance: [{"id":1,"name":"Ola","city":"Trondheim"}, {"id":2,"name":"Kari","city":"Oslo"}, {"id":3,"name":"Per","city":"Tromsø"}]
  //Note: in future applications, only send needed information
  response.send(customers);
});

//Get one customer given its id
app.get('/customers/:id', (request, response) => {
  for(var c=0;c<customers.length;c++) {
    if(customers[c].id==request.params.id) {
      response.send(customers[c]);

      return;
    }
  }
  //Respond with not found status code
  response.sendStatus(404);
});

app.delete('/customers/:id', (request, response) => {
  for(var c=0;c<customers.length;c++) {
    if(customers[c].id==request.params.id) {
      customers.splice(c,1);
      response.sendStatus(200);

      return;
    }
  }
  //Respond with not found status code
  response.sendStatus(404);
});

//Add new customer if name and city contain data
app.post('/customers', (request, response) => {
  if(request.body.name && request.body.city) {
    customers.push(new Customer(request.body.name, request.body.city));
    response.send(customers[customers.length-1].id.toString());
    return;
  }
  //Respond with bad request status code
  response.sendStatus(400);
});

app.put('/customer', (request,response)=> {
  var obj = request.body;
  if(!(!obj.name && !obj.city)){
    for(var customer of customers){
      if(customer.id==obj.id){
        customer.city = obj.city;
        customer.name = obj.name;
        response.send(customer);
        return;
      }
    }
  }else{

  }

});


//Start the web server serving the Angular 2 standalone client
//Open for instance http://localhost:3000 in a web browser
var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map
