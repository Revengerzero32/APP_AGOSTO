import { Component, ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { IonicModule,AnimationController,Animation } from '@ionic/angular';
import { NavigationExtras, Router,RouterModule } from '@angular/router';

import { UserService } from 'src/app/user.service'; // Ajusta la ruta según la ubicación real del archivo


@Component({
  selector: 'app-logindocente',
  templateUrl: './logindocente.page.html',
  styleUrls: ['./logindocente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule ]
})
export class LogindocentePage  {

  logindocenteForm! : FormGroup;

  @ViewChild('logo',{read:ElementRef }) logo?:ElementRef<HTMLImageElement>;

  private logoAnimation!:Animation

  constructor(private fb:FormBuilder, 
              private router:Router,  
              private animationCtrl:AnimationController,
              private  retornoService:  UserService
            ) {

  this.logindocenteForm=this.fb.group({ 

    username: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern('^[a-zA-Z0-9]*$')
      ]
    ],

    password:[
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.pattern('^[0-9]*$')
      ]
    ]
});
  } // fin constructor

  onLoginProfe() {

    if(this.logindocenteForm.valid)
      {
        const username =this.logindocenteForm.get('username')?.value;
        const password =this.logindocenteForm.get('password')?.value;

        // Navegamos a Home y pasamos los parametros
//        this.router.navigate( ['home'], { queryParams:{username,password}});
//** */ previamente validamos en el servicio user y pass

        var respuesta: boolean= this.retornoService.validaServicio(username,password)

        if (respuesta) {  
            let navigationExtras:NavigationExtras={
              state:{
                nombre:username 
              }
            }

            this.router.navigate( ['genera-qr'],navigationExtras);
         }else{  
            alert('Usuario o Contraseña incorrecta');
         }

 

      } else { 
         console.error('Formulario no valido')
       }
  } // Fin onLogin

  ngAfterViewInit() { 
    if (this.logo?.nativeElement){ 
      this.logoAnimation=this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(5000)
      .fromTo('opacity','0','1');




      this.logoAnimation.play();
      

    }// Fin If
      else{ 
        console.error('Los elementos logo o texto no fueron encontrados')
      }


  } // Fin ngAfterViewInit

  onLoginRegistro() {
    this.router.navigate(['registro']);
  
   
  } // Fin onLoginAlumno



} // Fin 
