import { Component, ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IonicModule,AnimationController,Animation } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule ]
})
export class InicioPage  {


  @ViewChild('logo',{read:ElementRef }) logo?:ElementRef<HTMLImageElement>;
  

  private logoAnimation!:Animation

  constructor(private fb:FormBuilder, 
              private router:Router,  
              private animationCtrl:AnimationController,
              
            ) {

 
};
onLoginDocente() {
  this.router.navigate(['logindocente']);

 
} // Fin onLoginDocente
onLoginAlumno() {
  this.router.navigate(['login']);

 
} // Fin onLoginAlumno

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

  } // fin constructor

 




