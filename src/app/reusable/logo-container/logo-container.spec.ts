import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoContainer } from './logo-container';

describe('LogoContainer', () => {
  let component: LogoContainer;
  let fixture: ComponentFixture<LogoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
