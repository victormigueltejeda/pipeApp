import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Victor';
  public gender: 'male' | 'famele' | 'no existe' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    famele: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'no existe';
  }

  //i18nPlural

  public clients: string[] = [
    'Maria',
    'Pedro',
    'Hernado',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'No tenemos Ningun Cliente Esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas  esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Fernado',
    age: 36,
    address: 'Ottawa, canada',
  };

  //async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos Data en la promesa');
      console.log('Tenemos Data en la promesa');
    }, 2000);
  });
}
