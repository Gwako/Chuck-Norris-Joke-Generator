import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdyComponent } from './nerdy.component';

describe('NerdyComponent', () => {
  let component: NerdyComponent;
  let fixture: ComponentFixture<NerdyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NerdyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NerdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
