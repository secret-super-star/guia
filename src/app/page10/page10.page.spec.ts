import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page10Page } from './page10.page';

describe('Page10Page', () => {
  let component: Page10Page;
  let fixture: ComponentFixture<Page10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
