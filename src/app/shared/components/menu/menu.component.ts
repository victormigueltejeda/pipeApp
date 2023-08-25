import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipe de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto Fecha',
            icon: 'pi pi-aling-left',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
