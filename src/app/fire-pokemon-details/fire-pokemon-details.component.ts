import { Component, OnInit, Input } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-fire-pokemon-details',
  templateUrl: './fire-pokemon-details.component.html',
  styleUrls: ['./fire-pokemon-details.component.css'],
})
export class FirePokemonDetailsComponent implements OnInit {
  @Input() firePokemon!: Pokemon;

  constructor() {}
  ngOnInit() {}
}
