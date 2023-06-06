import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {ChirpComponent} from '../chirp/chirp.component';
import {Chirp} from '../chirp/chirp.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent, ChirpComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chirps: Chirp[] = [{
    user: {
      profilepic: 'http://localhost:4200/assets/greg.jpg',
      name: 'Gregor',
      handle: '@GregorSpeck'
    },
    message: 'Dieser Post ist ein Beispiel, was wir alles machen können. Mit ganzen 80 Zeichen pro Chirp.'
  }, {
    user: {
      profilepic: 'http://localhost:4200/assets/dummy_1.jpg',
      name: 'Marko',
      handle: '@PizzaFindIchGut'
    },
    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores '
  },{
    user: {
      profilepic: 'http://localhost:4200/assets/dummy_2.jpg',
      name: 'Steffi',
      handle: '@rapt0r'
    },
    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores '
  },{
    user: {
      profilepic: 'http://localhost:4200/assets/jochen.jpg',
      name: 'Jochen',
      handle: '@JochenKraushaar'
    },
    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores '
  },{
    user: {
      profilepic: 'http://localhost:4200/assets/dummy_3.jpg',
      name: 'Fatme',
      handle: '@code4life'
    },
    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores '
  }, {
    user: {
      profilepic: 'http://localhost:4200/assets/greg.jpg',
      name: 'Gregor',
      handle: '@GregorSpeck'
    },
    message: 'Heute läuft mal wieder alles schief bei den DevOps kollegen. Wer hilft?'
  }, {
    user: {
      profilepic: 'http://localhost:4200/assets/jochen.jpg',
      name: 'Jochen',
      handle: '@JochenKraushaar'
    },
    message: 'Website ist online - Hallo Welt!'
  }];
}
