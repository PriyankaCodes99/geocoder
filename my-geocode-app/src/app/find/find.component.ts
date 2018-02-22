import { Component, OnInit } from '@angular/core';

//import response object
import { Response, Http } from '@angular/http';

//import the form module
import { NgForm } from '@angular/forms';

//promise
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})


//http : Http so type is :Http
export class FindComponent implements OnInit {
    
    constructor(private http: Http) { 
        //constructor runs when our component gets used
        
    }
    
    
    public lat: number; //public property
    public lng: number; //public property
    
    
    //:is used to TYPE things
    //import the response object    
    //function returns a promise to us.
    //function is going to make a request and will return a promise. 
    //with information or error. 
    // : is typescript, type which data we expect back. 
    getLatLng(address: string) :Promise<Response[]> {
        //submit our API
        //so all API stuff should go here
        
        const apiKey = 'AIzaSyBiMlKpnc7zMMUdkGF6FGOkkT9Xo95NO_8'; //given by google
        const endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + apiKey; // helps us construct our string based off the geocoder API structure. 
        
        //spaces and + signs in API url work the same way!
        //use JS to make a string using +
        //this gives a url to get the json object
        //console.log(endpoint);
        //set up request to endpoint as a promise
        //promise is a JSON object
        
        //http object needed
        
        //we need the response object 
        
        //go in constructor 
        //create a parameter to be used for object
        
        
        //send out the endpoint
        //return this.http.get(endpoint).toPromise().then((response) => {response.json()} as Response[] ).catch(this.handleError) ;
        return this.http.get(endpoint).toPromise().then((response) => {
            //console.log(response);
            //console.log(response.json());
            return response.json() as Response[];
            //now we need to create something to save this information. 
            
            
            /*
            can also add other options to .get
            return this.http.get(endpoint, {"Acess-Control-Allow-Origin":"*"}).toPromise().then(function (response) ) {return response.json() as Response[]; }
            */
            
            
        });
        
        /*
        http is private var located in geocoder component, this.http means we will get it from the geocofer (find) private component. 
        
        .get is a function that allows us to make the request when we add the endpoint. This is our geocode request. 
        
        then we run toPromise so we want to follow the request to be in the form of a promise. 
        
        .then runs when promise is successful
        
        .catch runs when promise has an error
        
        if then runs catch will not run, only when .then fails,  .catch will run.
        
        use arrow function inside of then, response will hold the data the promise sends back as  
        parameter in arrow function.
        
        code goes in {} and we return the response we have in the form of a JSON. 
        
        */
        
        
        
        
        
        
        
    }
    
    
    
    /*************************************
    
    letLatLng (address: string):Promise<Response[]> {
        const apiKey = ;
        const endpoint = ;
        let headers = new Headers ({'Content Type':'application/jsonp'});
        let options = new RequestOptions({
        headers: headers
        });
        return this.http.get(endpoint, options).toPromise().then( function (response) ) {
            //console.log(response.json());
            return response.json() as Response[];
        }
    }
    
    
    **********************************************/
    
    
    
    //create this to handle form submission
    handleSubmit ( form: NgForm ) {
        // console.log(form);
        //console.log (form.value) ; // log our parameter
        
        //grab just the object with dot 
        //console.log(form.value.address);
        
        
        //handleSubmit should show lat and long
        //take address string, put it through API, get 
        //data back, and print the data that we want. 
        
        
        //create a new variable called address and set it to the input value
        const address = form.value.address;
        //address is based off the name attribute in form. name attributes in forms are universal. 
        this.getLatLng(address).then( (response) => { //arrow function doesn't recontextualize this  
           // console.log(response);
          // console.log(response['results'][0].geometry.location.lat);
            console.log(this);
            this.lat = response['results'][0].geometry.location.lat;
            this.lng = response['results'][0].geometry.location.lng;
        }  ) ; 
        ///////////////// gives us an empty promise and then info later async. 
        //this.getLatLng returns a data object so save it. 
        
        //console.log(response['results']);
        
        //create properties to put it in html
        
        
        //asynchronization
        //AJAX
        //so index.html doesn't reload when some info is requested
        
        //only one section is replaced, it is asynchornous
        
        //so a part of the page can be loaded separately
        //and so JS apps feel faster
        //promises; gives something. Next iteration is called async. 
        //asynchornous call
        
        //so you either get something or it can also give an error.
        
        //so advantage: you don't have to reload everything all the time. 
        
        
        
        
        
        
    }

    ngOnInit() {
        
    }

    
}
