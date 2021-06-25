import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatUsuariosComponent } from './dialog-creat-usuarios.component';

describe('DialogCreatUsuariosComponent', () => {
  let component: DialogCreatUsuariosComponent;
  let fixture: ComponentFixture<DialogCreatUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreatUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreatUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
