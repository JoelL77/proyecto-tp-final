import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { CognitoService } from '../../../api/services/cognito/cognito.service';
import { EventService } from '../../../api/services/event/event.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  sessionAuthenticated = "noauth";
  rolUsuario: string = '';
  public currentUser;
  private eventSubscription!: Subscription;


  isNavOpen: boolean = false;


  constructor(private cognitoService: CognitoService,
    private router: Router, private location: Location,
    private eventService: EventService) { }


  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.obtenerUsuarioActual();

    this.eventSubscription = this.eventService.getEvent().subscribe((event: string) => {
      if (event === 'loginSuccess') {
        this.obtenerUsuarioActual();


      }

    });
  }

  onCerrarSesion() {
    this.cognitoService.signOut()
      .then(() => {
        // La sesión se cerró correctamente
        sessionStorage.removeItem('currentUser');
        this.sessionAuthenticated = "noauth";
        this.rolUsuario = '';
        this.reloadPage();
      })
      .catch((error) => {
        // Ocurrió un error al cerrar la sesión
        console.error('Error al cerrar sesión:', error);
      });
  }

  reloadPage() {
    if (window.location.pathname == "/") {
      window.location.reload();
    } else {
      this.router.navigateByUrl('/');
    }
  }


  private obtenerUsuarioActual() {
    let rol = sessionStorage.getItem("rol");
    let user = sessionStorage.getItem("currentUser");
    if (user !== null) {
      if (rol !== null) {
        this.rolUsuario = rol;
      }
      this.sessionAuthenticated = 'auth';
      if (this.rolUsuario === 'Comercio') {
        this.currentUser = JSON.parse(user).comercio;
      }
      if (this.rolUsuario === 'Usuario') {
        this.currentUser = JSON.parse(user).usuario;
      }
    }
  }



  closeMobileNav(): void {
    const navbar = document.querySelector('#navbar') as HTMLElement | null;
    if (navbar) {
      navbar.classList.remove('navbar-mobile');
    }
  }

}
