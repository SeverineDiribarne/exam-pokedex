import { Component, OnInit, Input } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-plant-pokemon-details',
  templateUrl: './plant-pokemon-details.component.html',
  styleUrls: ['./plant-pokemon-details.component.css'],
})
export class PlantPokemonDetailsComponent implements OnInit {
  @Input() plantPokemon!: Pokemon;

  constructor() {}
  ngOnInit() {}
}
