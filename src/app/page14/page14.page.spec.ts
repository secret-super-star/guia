import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14Page } from './page14.page';

describe('Page14Page', () => {
  let component: Page14Page;
  let fixture: ComponentFixture<Page14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
