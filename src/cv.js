import {bindable} from "aurelia-framework"
export class CV{
	@bindable python;
	@bindable pythonExp;
	@bindable tabmenu;
	constructor(){
		
	}
	attached(){
		$(this.python).progress({percent:90});
		$(this.C).progress({percent:75});
		$(this.cpp).progress({percent:85});
		$(this.java).progress({percent:75});
		$(this.go).progress({percent:75});
		$(this.js).progress({percent:85});
		$(this.pythonExp).progress({percent:90});
		$(this.CExp).progress({percent:65});
		$(this.cppExp).progress({percent:75});
		$(this.javaExp).progress({percent:65});
		$(this.goExp).progress({percent:85});
		$(this.jsExp).progress({percent:90});
		$(this.tabmenu).children().tab();
	}
}