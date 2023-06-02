import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirePokemonListComponent } from './fire-pokemon-list/fire-pokemon-list.component';
import { LightningPokemonListComponent } from './lightning-pokemon-list/lightning-pokemon-list.component';
import { PlantPokemonListComponent } from './plant-pokemon-list/plant-pokemon-list.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    FirePokemonListComponent,
    LightningPokemonListComponent,
    PlantPokemonListComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
