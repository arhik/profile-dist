import { inject } from 'aurelia-framework';
import markdown from 'markdown';
    
@inject(Element, markdown)
export class MarkdowntrackerCustomAttribute {  

    constructor(element,md) {
        this.markdown  = md.markdown;
        this.element = element;
    }

    valueChanged(newValue) {

        console.log(newValue)
        console.log(markdown)
        this.element.innerHTML = this.markdown.toHTML(newValue
                    .split('\n')
                    .map(line => line.trim())
                    .join('\n'));
    }
}