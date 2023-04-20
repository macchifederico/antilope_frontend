import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosenvioComponent } from './datosenvio.component';

describe('DatosenvioComponent', () => {
  let component: DatosenvioComponent;
  let fixture: ComponentFixture<DatosenvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosenvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosenvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
