import { Component } from '@angular/core';
import Pokemon from '../types/pokemon.type'

@Component({
  selector: 'app-plant-pokemon-list',
  templateUrl: './plant-pokemon-list.component.html',
  styleUrls: ['./plant-pokemon-list.component.css']
})
export class PlantPokemonListComponent implements OnInit {

  constructor(){}
  ngOnInit(){}
  plantPokemons =[
    {id : 1, name :'Arcko', size : '0.5m', evolution: 'Massko'}
    {id : 2, name :'bulbizarre', size : '0.7m', evolution: 'Herbizarre'}
    {id : 3, name :'Germignon', size : '0.9m', evolution: ''}
  ]

  {id : 1, name :'Pichu', size : '', evolution: ''}
}
