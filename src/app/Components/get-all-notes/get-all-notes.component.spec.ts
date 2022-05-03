import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllNotesComponent } from './get-all-notes.component';

describe('GetAllNotesComponent', () => {
  let component: GetAllNotesComponent;
  let fixture: ComponentFixture<GetAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
