import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes: Hero[] = [
    {
      name: 'Super Man',
      canFly: true,
      color: Color.blue,
    },

    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },

    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },

    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },

    {
      name: 'Linterna Verde',
      canFly: false,
      color: Color.green,
    },
  ];
}
