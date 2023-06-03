import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePokemonDetailsComponent } from './fire-pokemon-details.component';

describe('FirePokemonDetailsComponent', () => {
  let component: FirePokemonDetailsComponent;
  let fixture: ComponentFixture<FirePokemonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirePokemonDetailsComponent]
    });
    fixture = TestBed.createComponent(FirePokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
