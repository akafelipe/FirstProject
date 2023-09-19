import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {

    greeting = 'World'
    changeHandler(event){
        this.greeting = event.target.valeu;
    }
}