import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent {
  public user = JSON.parse(localStorage.getItem('user'));
  constructor(
    public router : Router,
    ){}
    
    closeSession(){
      localStorage.clear();  
      this.router.navigate(['/login']);
    }
}
