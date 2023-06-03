import { Component, OnInit, Input } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-lightning-pokemon-details',
  templateUrl: './lightning-pokemon-details.component.html',
  styleUrls: ['./lightning-pokemon-details.component.css'],
})
export class LightningPokemonDetailsComponent implements OnInit {
  @Input() lightningPokemon!: Pokemon;

  constructor() {}
  ngOnInit() {}
}
