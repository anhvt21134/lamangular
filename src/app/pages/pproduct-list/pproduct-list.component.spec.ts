import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PproductListComponent } from './pproduct-list.component';

describe('PproductListComponent', () => {
  let component: PproductListComponent;
  let fixture: ComponentFixture<PproductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PproductListComponent]
    });
    fixture = TestBed.createComponent(PproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
