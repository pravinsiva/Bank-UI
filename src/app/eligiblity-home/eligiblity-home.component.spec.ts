import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligiblityHomeComponent } from './eligiblity-home.component';

describe('EligiblityHomeComponent', () => {
  let component: EligiblityHomeComponent;
  let fixture: ComponentFixture<EligiblityHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligiblityHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligiblityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
