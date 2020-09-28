import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalInfoAnimalPage } from './modal-info-animal.page';

describe('ModalInfoAnimalPage', () => {
  let component: ModalInfoAnimalPage;
  let fixture: ComponentFixture<ModalInfoAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoAnimalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalInfoAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
