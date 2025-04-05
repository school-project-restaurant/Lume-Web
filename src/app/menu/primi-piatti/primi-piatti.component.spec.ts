import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimiComponent } from './primi-piatti.component';

describe('PrimiPiattiComponent', () => {
  let component: PrimiComponent;
  let fixture: ComponentFixture<PrimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
