import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPokemonListComponent } from './plant-pokemon-list.component';

describe('PlantPokemonListComponent', () => {
  let component: PlantPokemonListComponent;
  let fixture: ComponentFixture<PlantPokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantPokemonListComponent],
    });
    fixture = TestBed.createComponent(PlantPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
