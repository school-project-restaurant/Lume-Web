import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondiComponent } from './secondi-piatti.component';

describe('SecondiPiattiComponent', () => {
  let component: SecondiComponent;
  let fixture: ComponentFixture<SecondiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
