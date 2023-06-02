import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningPokemonListComponent } from './lightning-pokemon-list.component';

describe('LightningPokemonListComponent', () => {
  let component: LightningPokemonListComponent;
  let fixture: ComponentFixture<LightningPokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightningPokemonListComponent]
    });
    fixture = TestBed.createComponent(LightningPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
