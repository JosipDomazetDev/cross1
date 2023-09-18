import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { HometabPage } from './hometab.page';

describe('HometabPage', () => {
  let component: HometabPage;
  let fixture: ComponentFixture<HometabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HometabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
