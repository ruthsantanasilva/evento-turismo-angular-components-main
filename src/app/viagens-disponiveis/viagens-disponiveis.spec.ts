import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagensDisponiveis } from './viagens-disponiveis';

describe('ViagensDisponiveis', () => {
  let component: ViagensDisponiveis;
  let fixture: ComponentFixture<ViagensDisponiveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViagensDisponiveis],
    }).compileComponents();

    fixture = TestBed.createComponent(ViagensDisponiveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
