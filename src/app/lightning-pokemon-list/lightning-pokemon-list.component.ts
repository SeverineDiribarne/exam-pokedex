import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type'

@Component({
  selector: 'app-lightning-pokemon-list',
  templateUrl: './lightning-pokemon-list.component.html',
  styleUrls: ['./lightning-pokemon-list.component.css']
})
export class LightningPokemonListComponent implements OnInit {

  constructor(){}
  ngOnInit(){}

  lightningPokemons = [
    {id : 1, name :'Pikachu', size : '0.4m', evolution: 'Raichu'},
    {id : 2, name :'Dynavolt'size : '0.6m', evolution: 'Elecsprint'},
    {id : 3, name :'Lixy'size : '0.5m', evolution: 'Luxio'}
  ];
}
