import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-lightning-pokemon-list',
  templateUrl: './lightning-pokemon-list.component.html',
  styleUrls: ['./lightning-pokemon-list.component.css'],
})
export class LightningPokemonListComponent implements OnInit {
  lightningPokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Pikachu',
      size: '0.3m',
      evolution: 'Raichu',
      weakness: [{ id: 1, name: 'Ground' }],
      attack: [
        { id: 1, name: 'Electro Ball' },
        { id: 2, name: 'Thunderbolt' },
        { id: 3, name: 'Thunder' },
      ],
    },
    {
      id: 2,
      name: 'Electrike',
      size: '0.6m',
      evolution: 'Manectric',
      weakness: [{ id: 1, name: 'Ground' }],
      attack: [
        { id: 1, name: 'Spark' },
        { id: 2, name: 'Discharge' },
        { id: 3, name: 'Thunder' },
      ],
    },
    {
      id: 3,
      name: 'Shinx',
      size: '0.5m',
      evolution: 'Luxio',
      weakness: [{ id: 1, name: 'Ground' }],
      attack: [
        { id: 1, name: 'Thunder Fang' },
        { id: 2, name: 'Wild Charge' },
        { id: 3, name: 'Discharge' },
      ],
    },
  ];

  constructor() {}
  ngOnInit() {}

  selectedLightningPokemon!: Pokemon;

  selectLightningPokemon(lighningPokemon: Pokemon) {
    this.selectedLightningPokemon = lighningPokemon;
  }
}
