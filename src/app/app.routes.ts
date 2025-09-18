import { Routes } from '@angular/router';
import { Ruta } from '@shared/enums/enums/Ruta.enum';
import { PublicoGuard } from './auth/guards/publico-guard';
import { ComercioGuard } from './auth/guards/comercio-guard';
import { UsuarioGuard } from './auth/guards/usuario-guard';
import { Login } from '@modules/page-login/pages/login/login';
import { PerfilUsuario } from '@modules/perfil-usuario/pages/perfil-usuario/perfil-usuario';
import { PerfilComercio } from '@modules/perfil-comercio/pages/perfil-comercio/perfil-comercio';
import { FormRegistro } from '@modules/form-registro/page/form-registro/form-registro';
import { OptimizadorLista } from '@modules/optimizador-lista/pages/optimizador-lista/optimizador-lista';
import { ConsultaEvento } from '@modules/consulta-evento/page/consulta-evento/consulta-evento';
import { HomeLanding } from '@modules/home-landing/pages/home-landing/home-landing';

export const routes: Routes = [

    {
        path: Ruta.Home,
        component: HomeLanding,
        loadComponent: () => import('@modules/home-landing/pages/home-landing/home-landing').then(c => c.HomeLanding),

    },
    {
        path: Ruta.ConsultaEvento,
        component: ConsultaEvento,
        loadComponent: () => import('@modules/consulta-evento/page/consulta-evento/consulta-evento').then(c => c.ConsultaEvento),
        canActivate: [PublicoGuard]
    },
    {
        path: Ruta.OptimizadorLista,
        component: OptimizadorLista,
        loadComponent: () => import('@modules/optimizador-lista/pages/optimizador-lista/optimizador-lista').then(c => c.OptimizadorLista),
        canActivate: [PublicoGuard]
    },
    {
        path: Ruta.FormRegistro,
        component: FormRegistro,
        loadComponent: () => import('@modules/form-registro/page/form-registro/form-registro').then(c => c.FormRegistro)

    },
    {
        path: Ruta.Login,
        component: Login,
        loadComponent: () => import('@modules/page-login/pages/login/login').then(c => c.Login)

    },
    {
        path: Ruta.PerfilUsuario,
        component: PerfilUsuario,
        loadComponent: () => import('@modules/perfil-usuario/pages/perfil-usuario/perfil-usuario').then(c => c.PerfilUsuario),
        canActivate: [UsuarioGuard]
    },
    {
        path: Ruta.PerfilComercio,
        component: PerfilComercio,
        loadComponent: () => import('@modules/perfil-comercio/pages/perfil-comercio/perfil-comercio').then(c => c.PerfilComercio),
        canActivate: [ComercioGuard]
    },
    {
        path: '**',
        redirectTo: Ruta.Login,
    }

];
