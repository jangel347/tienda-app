import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEjerciciosComponent } from './home-ejercicios.component';

describe('HomeEjerciciosComponent', () => {
  let component: HomeEjerciciosComponent;
  let fixture: ComponentFixture<HomeEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEjerciciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
