import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-plant-pokemon-list',
  templateUrl: './plant-pokemon-list.component.html',
  styleUrls: ['./plant-pokemon-list.component.css'],
})
export class PlantPokemonListComponent implements OnInit {
  plantPokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Treecko',
      size: '0.5m',
      evolution: 'Grovyle',
      weakness: [
        { id: 1, name: 'Fire' },
        { id: 2, name: 'Ice' },
        { id: 3, name: 'Bug' },
        { id: 4, name: 'Poison' },
        { id: 5, name: 'Flying' },
      ],
      attack: [
        { id: 1, name: 'Mega Drain' },
        { id: 2, name: 'Giga Drain' },
        { id: 3, name: 'Energy Ball' },
      ],
    },
    {
      id: 2,
      name: 'Bulbasaur',
      size: '0.7m',
      evolution: 'Ivysaur',
      weakness: [
        { id: 1, name: 'Fire' },
        { id: 2, name: 'Ice' },
        { id: 3, name: 'Bug' },
        { id: 4, name: 'Poison' },
        { id: 5, name: 'Flying' },
      ],
      attack: [
        { id: 1, name: 'Vine Whip' },
        { id: 2, name: 'Razor Leaf' },
        { id: 3, name: 'Solar Beam' },
      ],
    },
    {
      id: 3,
      name: 'Chikorita',
      size: '0.9m',
      evolution: 'Bayleef',
      weakness: [
        { id: 1, name: 'Fire' },
        { id: 2, name: 'Ice' },
        { id: 3, name: 'Bug' },
        { id: 4, name: 'Poison' },
        { id: 5, name: 'Flying' },
      ],
      attack: [
        { id: 1, name: 'Razor Leaf' },
        { id: 2, name: 'Magical Leaf' },
        { id: 3, name: 'Solar Beam' },
      ],
    },
  ];

  constructor() {}
  ngOnInit() {}

  selectedPlantPokemon!: Pokemon;

  selectPlantPokemon(plantPokemon: Pokemon) {
    this.selectedPlantPokemon = plantPokemon;
  }
}
