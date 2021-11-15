import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatClientsSayComponent } from './what-clients-say.component';

describe('WhatClientsSayComponent', () => {
  let component: WhatClientsSayComponent;
  let fixture: ComponentFixture<WhatClientsSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatClientsSayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatClientsSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
