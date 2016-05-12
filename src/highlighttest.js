import {bindable, customElement, inject} from "aurelia-framework"
// import {hljs} from "highlight.js"
import hljs from "highlight.js"
@customElement("highjs")
export class HighlightJS{
	@bindable code;
	constructor(){
		
	}
	attached(){
		hljs.configure({tabReplace:'    '});
		hljs.initHighlighting();
		

		$(this.code).each(function(i, block) {
		  hljs.highlightBlock(block);
		});
		console.log(hljs)
	}
}