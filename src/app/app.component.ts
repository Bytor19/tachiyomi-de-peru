import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Productos', url: '/folder/Productos', icon: 'bag' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Mi Cuenta', url: '/folder/Mi Cuenta', icon: 'person' },
    { title: 'Manga', url: 'register', icon: 'log-in' },
    { title: 'Mis Compras', url: '/folder/Mis Compras', icon: 'pricetags' },
  ];
  public labels = ['Promociones', 'Descuentos'];
  constructor() {}
}
