import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: 'login',
      loadComponent: () => import('./login/login.page').then( m => m.LoginPage),  
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'genera-qr',
    loadComponent: () => import('./genera-qr/genera-qr.page').then( m => m.GeneraQrPage)
  },
  {
    path: 'logindocente',
    loadComponent: () => import('./logindocente/logindocente.page').then( m => m.LogindocentePage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'scan-qr',
    loadComponent: () => import('./scan-qr/scan-qr.page').then( m => m.ScanQrPage)
  },
   {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)


  },
  {

    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  

];
