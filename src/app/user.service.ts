import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

// metodo para validar ingreso de usuario desde un servicio
  validaServicio(usuario:string ,clave: number): boolean {
    return true;


} // Termino Constructor

}
