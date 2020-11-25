import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPacienteComponent } from './nuevo-paciente.component';

describe('NuevoPacienteComponent', () => {
  let component: NuevoPacienteComponent;
  let fixture: ComponentFixture<NuevoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
