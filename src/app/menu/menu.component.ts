import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes:Dish[] = [
    {
    id:'0',
    name:'Foyaz',
    image:'/assets/images/uthappizza.png',
    category:'mains',
    featured:true,
    label:'hot',
    price:4.97,
    description:'a unique combination of Indian uthappa Pizza'
    },
    {
      id:'1',
      name:'Foysal',
      image:'/assets/images/buffet.png',
      category:'mains',
      featured:true,
      label:'hot',
      price:5.97,
      description:'a unique combination of Indian uthappa Pizza'
      },
      {
        id:'2',
        name:'Mehedi',
        image:'/assets/images/zucchipakoda.png',
        category:'mains',
        featured:true,
        label:'cold',
        price:4.97,
        description:'a unique combination of Indian uthappa Pizza'
        },
        {
          id:'3',
          name:'Bulbul',
          image:'/assets/images/elaicheesecake.png',
          category:'mains',
          featured:true,
          label:'hot',
          price:4.97,
          description:'a unique combination of Indian uthappa Pizza'
          },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
