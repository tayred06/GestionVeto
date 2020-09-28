import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAjoutAnimalPage } from './modal-ajout-animal.page';

describe('ModalAjoutAnimalPage', () => {
  let component: ModalAjoutAnimalPage;
  let fixture: ComponentFixture<ModalAjoutAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjoutAnimalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAjoutAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
