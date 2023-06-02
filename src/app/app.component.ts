import { Component } from '@angular/core';

let pokemonCount = 2;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = `votre pokédex de 1 pokémon`;
  titleStyle = {'font-family' : 'Times', 'font-size': '2rem'};



  
  addPokemon(){
    this.title = `votre pokédex de ` + (pokemonCount++) + ` pokémons` ;
  }
}
