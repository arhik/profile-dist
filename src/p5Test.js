import P5 from "p5";

import {inject, bindable, customElement, Factory} from "aurelia-framework"


// Dependency injection using resolver to modify the injected dependency
// Factory of P5 is created
@inject(Factory.of(P5))
@customElement('p5-test')
export class P5Test{
	@bindable p5Div;
	constructor(p5){
		this.p5 = p5;
	}
	
	attached(){
		var el = this.p5Div;
		var sketch = (p) => {
			p.setup = function(){
				let myCanvas = p.createCanvas(640,480, p.WEBGL);
				myCanvas.parent(el)
			}

			p.draw = function(){
				p.background(200);
				// p.sphere(200)
				p.rotateX(p.frameCount * 0.01);
  				p.rotateZ(p.frameCount * 0.01);
  				p.cylinder(200, 200);
			}
		}
		this.p5 = new this.p5(sketch);
	}
	dettached(){
	}
} 