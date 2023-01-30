import { LightningElement } from 'lwc';

export default class TestWorldComponent extends LightningElement {

    greeting = 'World';
    changeHandler(event)
    {
        this.greeting=event.target.value;
    }

}