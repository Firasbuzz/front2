import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSComponent } from './information-s.component';

describe('InformationSComponent', () => {
  let component: InformationSComponent;
  let fixture: ComponentFixture<InformationSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
