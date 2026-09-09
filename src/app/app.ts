import { Component } from '@angular/core';
import { Settings } from './settings/settings';

@Component({
  selector: 'app-root',
  imports: [Settings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

