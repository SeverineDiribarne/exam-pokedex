import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-fire-pokemon-list',
  templateUrl: './fire-pokemon-list.component.html',
  styleUrls: ['./fire-pokemon-list.component.css'],
})
export class FirePokemonListComponent implements OnInit {
  firePokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Growlithe',
      size: '0.7 m',
      evolution: 'Arcanine',
      weakness: [
        { id: 1, name: 'Water' },
        { id: 2, name: 'Rock' },
        { id: 3, name: 'Ground' },
      ],
      attack: [
        { id: 1, name: 'Flame wheel' },
        { id: 2, name: 'Torch Song' },
        { id: 3, name: 'Flare Blitz' },
      ],
    },
    {
      id: 2,
      name: 'Charmander',
      size: '0.6 m',
      evolution: 'Charmeleon',
      weakness: [
        { id: 1, name: 'Water' },
        { id: 2, name: 'Rock' },
        { id: 3, name: 'Ground' },
      ],
      attack: [
        { id: 1, name: 'Fire Fang' },
        { id: 1, name: 'Flamethrower' },
        { id: 1, name: 'Eruption' },
      ],
    },
    {
      id: 3,
      name: 'Vulpix',
      size: '0.6 m',
      evolution: 'Ninetales',
      weakness: [
        { id: 1, name: 'Water' },
        { id: 2, name: 'Rock' },
        { id: 3, name: 'Ground' },
      ],
      attack: [
        { id: 1, name: 'Ember' },
        { id: 1, name: 'Flamethrower' },
        { id: 1, name: 'Fire Blast' },
      ],
    },
  ];
  selectedFirePokemon!: Pokemon;

  constructor() {}
  ngOnInit() {}

  selectFirePokemon(firePokemon: Pokemon) {
    this.selectedFirePokemon = firePokemon;
  }
}
