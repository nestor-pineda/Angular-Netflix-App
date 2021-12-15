import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedComponent } from './recomended.component';

describe('RecomendedComponent', () => {
  let component: RecomendedComponent;
  let fixture: ComponentFixture<RecomendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
