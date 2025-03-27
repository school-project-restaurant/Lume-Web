import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntipastiComponent } from './antipasti.component';

describe('AntipastiComponent', () => {
  let component: AntipastiComponent;
  let fixture: ComponentFixture<AntipastiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntipastiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntipastiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
