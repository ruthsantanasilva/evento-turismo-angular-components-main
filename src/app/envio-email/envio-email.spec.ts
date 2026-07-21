import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioEmail } from './envio-email';

describe('EnvioEmail', () => {
  let component: EnvioEmail;
  let fixture: ComponentFixture<EnvioEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvioEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
