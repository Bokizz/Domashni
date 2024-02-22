import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KebabsComponent } from './kebabs.component';

describe('KebabsComponent', () => {
  let component: KebabsComponent;
  let fixture: ComponentFixture<KebabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KebabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KebabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
