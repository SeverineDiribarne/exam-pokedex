import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningPokemonDetailsComponent } from './lightning-pokemon-details.component';

describe('LightningPokemonDetailsComponent', () => {
  let component: LightningPokemonDetailsComponent;
  let fixture: ComponentFixture<LightningPokemonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightningPokemonDetailsComponent]
    });
    fixture = TestBed.createComponent(LightningPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
