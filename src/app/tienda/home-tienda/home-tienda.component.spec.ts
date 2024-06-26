import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTiendaComponent } from './home-tienda.component';

describe('HomeTiendaComponent', () => {
  let component: HomeTiendaComponent;
  let fixture: ComponentFixture<HomeTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTiendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
