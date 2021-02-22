import {Component} from '@angular/core';

//Decorator pattern  : add dynamic functionality to an object
// it permits implement a component associate with the parent component
//note: it's not "herencia" because it don't create new components that " heredan" to the parent
@Component({
    selector : 'videojuegos', // label where the component is load
    templateUrl : './videojuegos.component.html' // The html code where will be show the compoent. The inverted quote marks let doing here
        // but we can import of other file
})
export class VideojuegosComponent{
    public nombre = 'Video juegos 2021';
    public mejor_juego ='GTA 5';
    public mejor_juego_retro ='super mario 64';
    public mostrar_retro = true;
    public color = "yellow"; 

    public lista =['Hola','como', 'tas'];
}