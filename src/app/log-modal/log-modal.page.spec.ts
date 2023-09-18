import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { LogModalPage } from './log-modal.page';

describe('LogModalPage', () => {
  let component: LogModalPage;
  let fixture: ComponentFixture<LogModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
