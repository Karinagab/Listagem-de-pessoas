import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCreateUpdateComponent } from './PessoasCreateUpdateComponent';

describe('PessoasCreateUpdateComponent', () => {
  let component: PessoasCreateUpdateComponent;
  let fixture: ComponentFixture<PessoasCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(PessoasCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
