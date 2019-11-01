import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page12Page } from './page12.page';

describe('Page12Page', () => {
  let component: Page12Page;
  let fixture: ComponentFixture<Page12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
