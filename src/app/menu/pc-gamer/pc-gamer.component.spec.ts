import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcGamerComponent } from './pc-gamer.component';

describe('PcGamerComponent', () => {
  let component: PcGamerComponent;
  let fixture: ComponentFixture<PcGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcGamerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
