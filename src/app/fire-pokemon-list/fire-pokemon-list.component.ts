import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type'

@Component({
  selector: 'app-fire-pokemon-list',
  templateUrl: './fire-pokemon-list.component.html',
  styleUrls: ['./fire-pokemon-list.component.css']
})
export class FirePokemonListComponent implements OnInit {

constructor(){ }
ngOnInit(){ }

firePokemons = [
  {id : 1, name : 'Caninos',size : '0.7 m', evolution : 'Arcanin'},
  {id : 2,name : 'Salamèche',size :'0.6 m',evolution : 'Reptincel'},
  {id : 3,name : 'Goupix',size :'0.6 m',evolution : 'Feunard'}
];

}
