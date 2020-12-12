import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logger(message) {
    console.log('La valeur de la variable est :', message);
  }
}
