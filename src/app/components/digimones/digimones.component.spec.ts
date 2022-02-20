import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonesComponent } from './digimones.component';

describe('DigimonesComponent', () => {
  let component: DigimonesComponent;
  let fixture: ComponentFixture<DigimonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
