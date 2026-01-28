import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { BoxLunchContainers } from '../../components/box-lunch-containers/box-lunch-containers';
import { Footer } from '../../components/footer/footer';
import { Nosotros } from '../../components/nosotros/nosotros';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, BoxLunchContainers, Footer, Nosotros, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
