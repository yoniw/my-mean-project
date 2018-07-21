import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplannerComponent } from './triplanner.component';

describe('TriplannerComponent', () => {
  let component: TriplannerComponent;
  let fixture: ComponentFixture<TriplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
