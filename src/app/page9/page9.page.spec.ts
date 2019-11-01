import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page9Page } from './page9.page';

describe('Page9Page', () => {
  let component: Page9Page;
  let fixture: ComponentFixture<Page9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
