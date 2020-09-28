import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAjoutClientPage } from './modal-ajout-client.page';

describe('ModalAjoutClientPage', () => {
  let component: ModalAjoutClientPage;
  let fixture: ComponentFixture<ModalAjoutClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjoutClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAjoutClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
