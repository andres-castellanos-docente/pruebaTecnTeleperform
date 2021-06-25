import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosextComponent } from './usuariosext.component';

describe('UsuariosComponent', () => {
  let component: UsuariosextComponent;
  let fixture: ComponentFixture<UsuariosextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
