import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldefectsComponent } from './totaldefects.component';

describe('TotaldefectsComponent', () => {
  let component: TotaldefectsComponent;
  let fixture: ComponentFixture<TotaldefectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaldefectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
