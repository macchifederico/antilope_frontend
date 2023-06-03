import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaentregaComponent } from './formaentrega.component';

describe('FormaentregaComponent', () => {
  let component: FormaentregaComponent;
  let fixture: ComponentFixture<FormaentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaentregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
