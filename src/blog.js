import {inject} from 'aurelia-framework'
import {HttpClient} from "aurelia-fetch-client"

@inject(HttpClient)
export class Blog {
	
	constructor(http){
		// http.configure(config => {
  //           config
  //             .useStandardConfiguration()
  //             .withBaseUrl('http://localhost:13102/api/');
  //       });	
        this.http = http;
	}

	activate(params){
		return this.http.fetch("/blogs").then(response => 
			response.json()).then(data => {
				console.log(data)
				this.blog = data[params.id-1];
			})
	}
}