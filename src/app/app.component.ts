import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Создать',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'Редактировать',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Удалить',
        icon: 'pi pi-fw pi-user',
      }
    ];
  }
}
