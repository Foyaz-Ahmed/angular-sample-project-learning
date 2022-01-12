import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = "hello hero, I am calling you!";

  //Refactor the component's hero property to be of type Hero
  // hero: Hero = {
  //   id:1,
  //   name: "Foyaz"
  // };
  heroes = Heroes;

  constructor() { }

  ngOnInit(): void {
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
