import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendefectsComponent } from './opendefects.component';

describe('OpendefectsComponent', () => {
  let component: OpendefectsComponent;
  let fixture: ComponentFixture<OpendefectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpendefectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
