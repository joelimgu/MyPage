import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreciationsComponent } from './appreciations.component';

describe('AppreciationsComponent', () => {
  let component: AppreciationsComponent;
  let fixture: ComponentFixture<AppreciationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppreciationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppreciationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
