import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page'; // Asegúrate de que este sea el nombre correcto
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterPage] // Asegúrate de que este sea el nombre correcto
})
export class RegisterPageModule {}
