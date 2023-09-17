import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {

    greenting = 'World'
    changeHandler(event){
        this.greeting = event.target.valeu;
    }
}