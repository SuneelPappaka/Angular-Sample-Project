import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGridComponent } from './common-grid-component';

describe('CommonGridComponent', () => {
  let component: CommonGridComponent;
  let fixture: ComponentFixture<CommonGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonGridComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
