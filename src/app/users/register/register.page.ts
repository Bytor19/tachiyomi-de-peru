import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private loadingController: LoadingController) {}

  async showLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }

    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 3000, // Duración de la animación de carga en milisegundos
      cssClass: 'loading-class'
    });
    await this.loading.present();
  }
}
