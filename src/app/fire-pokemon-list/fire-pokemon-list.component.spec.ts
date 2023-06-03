import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePokemonListComponent } from './fire-pokemon-list.component';

describe('FirePokemonListComponent', () => {
  let component: FirePokemonListComponent;
  let fixture: ComponentFixture<FirePokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirePokemonListComponent],
    });
    fixture = TestBed.createComponent(FirePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
