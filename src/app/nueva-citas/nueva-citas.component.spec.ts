import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCitasComponent } from './nueva-citas.component';

describe('NuevaCitasComponent', () => {
  let component: NuevaCitasComponent;
  let fixture: ComponentFixture<NuevaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
