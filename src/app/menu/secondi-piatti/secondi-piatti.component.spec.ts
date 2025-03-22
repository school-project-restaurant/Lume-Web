import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondiPiattiComponent } from './secondi-piatti.component';

describe('SecondiPiattiComponent', () => {
  let component: SecondiPiattiComponent;
  let fixture: ComponentFixture<SecondiPiattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondiPiattiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondiPiattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
