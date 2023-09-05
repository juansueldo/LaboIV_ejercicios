import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public edadUno= "";
  public edadDos = "";
  public restultado = "";
  public bienvenida = "Hola"
  public btnValue = "Calcular";
  public btnReset = "Limpiar";

  public onClick(event?: any) {
    this.restultado = this.edadUno + this.edadDos;
    console.log(this.restultado); 
  }
  public reset(event?: any) {
    this.edadUno = "";
    this.edadDos = "";
    this.restultado = "";
  }
}
