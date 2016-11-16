import {Component} from 'angular2/core';

@Component({
    selector : 'my-component',
    template : `hello {{name}}
            <input type="text" #inputElement/>`
})

export class MyComponentComponent {
    name = 'max'
}
