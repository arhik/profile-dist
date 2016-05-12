import {HttpClient} from 'aurelia-fetch-client';
import {inject} from "aurelia-framework";

@inject(HttpClient)
export class Bloglist{
	constructor(Http){
		this.http = Http;
		this.http.configure(config => {
    config
        // .withBaseUrl('/')
        .withDefaults({
            credentials: 'no-cors',
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin',
                'X-Requested-With': 'Fetch'
            }
        })
        .withInterceptor({
            request(request) {
                console.log(`Requesting ${request.method} ${request.url}`);
                return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
            },
            response(response) {
                console.log(`Received ${response.status} ${response.url}`);
                return response; // you can return a modified Response
            }
        });
});
	}

	activate(){
		return this.http.fetch("/blogs").then(response => 
			response.json()).then(data => {
				console.log(data)
				this.blogs = data;
			})
	}

	// attached(){
	// 	return  
	// }

}