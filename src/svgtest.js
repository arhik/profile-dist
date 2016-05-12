import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';
// import "../node_modules/snapsvg/dist/snap.svg-min.js";
import {customElement, bindable} from 'aurelia-framework';

@customElement('svg-intro')
export class SvgTest{
	@bindable snap;
	constructor(){

	}
	attached(){
		var s = Snap(this.snap);
	// Lets create big circle in the middle:
	var bigCircle = s.circle(150, 150, 100);
	// By default its black, lets change its attributes
	bigCircle.attr({
	    fill: "#bada55",
	    stroke: "#000",
	    strokeWidth: 5
	});
	// Now lets create another small circle:
	var smallCircle = s.circle(100, 150, 70);
	// Lets put this small circle and another one into a group:
	var discs = s.group(smallCircle, s.circle(200, 150, 70));
	// Now we can change attributes for the whole group
	discs.attr({
	    fill: "#fff"
	});
	// Now more interesting stuff
	// Lets assign this group as a mask for our big circle
	bigCircle.attr({
	    mask: discs
	});
	// Despite our small circle now is a part of a group
	// and a part of a mask we could still access it:
	smallCircle.animate({r: 50}, 1000);
		console.log(Snap(this.snap));
	}
}