import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgheaderComponent } from './orgheader.component';

describe('OrgheaderComponent', () => {
  let component: OrgheaderComponent;
  let fixture: ComponentFixture<OrgheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
