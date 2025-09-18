import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CognitoService } from '../../api/services/cognito/cognito.service';


@Injectable({
  providedIn: 'root'
})
export class ComercioGuard implements CanActivate {

  constructor(private router: Router, private authService: CognitoService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> {

    if(this.authService.esComercio()){
      return true;
    }
    else{
      return this.router.createUrlTree(['']);
    }
  }
}