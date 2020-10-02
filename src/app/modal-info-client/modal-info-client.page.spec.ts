import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalInfoClientPage } from './modal-info-client.page';

describe('ModalInfoClientPage', () => {
  let component: ModalInfoClientPage;
  let fixture: ComponentFixture<ModalInfoClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalInfoClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
