import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  imports: [CommonModule],
  templateUrl: './home-landing.html',
  styleUrl: './home-landing.css'
})
export class HomeLanding {

  public currentUser;
  public rol = 'Usuario';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log("asdsaasdasd");
    
    const headerElemento = document.getElementById('header');

    if (headerElemento) {
      this.renderer.setStyle(headerElemento, 'position', 'fixed');
    }
    this.obtenerUsuarioActual();
  }

  private obtenerUsuarioActual() {
    let rol = sessionStorage.getItem("rol");
    let user = sessionStorage.getItem("currentUser");
    if (user !== null) {
      if (rol === 'Comercio') {
        this.currentUser = JSON.parse(user).razonSocial;
        this.rol = 'Comercio';
      }
      if (rol === 'Usuario') {
        this.currentUser = JSON.parse(user).usuario;
      }
    }
  }


  ngOnDestroy() {
    const headerElemento = document.getElementById('header');

    if (headerElemento) {
      this.renderer.removeStyle(headerElemento, 'position');
    }
  }

}
