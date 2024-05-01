import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ULayoutComponent } from './u-layout.component';

describe('ULayoutComponent', () => {
  let component: ULayoutComponent;
  let fixture: ComponentFixture<ULayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ULayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ULayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
