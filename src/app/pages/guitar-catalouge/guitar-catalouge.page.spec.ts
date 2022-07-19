import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarCatalougePage } from './guitar-catalouge.page';

describe('GuitarCatalougePage', () => {
  let component: GuitarCatalougePage;
  let fixture: ComponentFixture<GuitarCatalougePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarCatalougePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarCatalougePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
