import {Component} from '@angular/core';

//Decorator pattern  : add dynamic functionality to an object
// it permits implement a component associate with the parent component
//note: it's not "herencia" because it don't create new components that " heredan" to the parent
@Component({
    selector : 'videojuegos', // label where the component is load
    template : `
    <h3> 
    componentes de videojuegos
    </h3>
    `  // The html code where will be show the compoent. The inverted quote marks let doing here
})
export class ViedojuegosCompoenent{
    public nombre = 'Video juegos 2021'
}