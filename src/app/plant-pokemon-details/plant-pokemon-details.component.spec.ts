import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPokemonDetailsComponent } from './plant-pokemon-details.component';

describe('PlantPokemonDetailsComponent', () => {
  let component: PlantPokemonDetailsComponent;
  let fixture: ComponentFixture<PlantPokemonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantPokemonDetailsComponent],
    });
    fixture = TestBed.createComponent(PlantPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
