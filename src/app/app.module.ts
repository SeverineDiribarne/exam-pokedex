import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirePokemonListComponent } from './fire-pokemon-list/fire-pokemon-list.component';
import { LightningPokemonListComponent } from './lightning-pokemon-list/lightning-pokemon-list.component';
import { PlantPokemonListComponent } from './plant-pokemon-list/plant-pokemon-list.component';
import { FirePokemonDetailsComponent } from './fire-pokemon-details/fire-pokemon-details.component';
import { LightningPokemonDetailsComponent } from './lightning-pokemon-details/lightning-pokemon-details.component';
import { PlantPokemonDetailsComponent } from './plant-pokemon-details/plant-pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirePokemonListComponent,
    FirePokemonDetailsComponent,
    LightningPokemonListComponent,
    LightningPokemonDetailsComponent,
    PlantPokemonListComponent,
    PlantPokemonDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
