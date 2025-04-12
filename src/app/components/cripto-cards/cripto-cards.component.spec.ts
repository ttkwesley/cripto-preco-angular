import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoCardsComponent } from './cripto-cards.component';

describe('CriptoCardsComponent', () => {
  let component: CriptoCardsComponent;
  let fixture: ComponentFixture<CriptoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriptoCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriptoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
