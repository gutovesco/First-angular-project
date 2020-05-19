import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTittlesComponent } from './list-tittles.component';

describe('ListTittlesComponent', () => {
  let component: ListTittlesComponent;
  let fixture: ComponentFixture<ListTittlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTittlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTittlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
