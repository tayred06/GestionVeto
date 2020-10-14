import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutInterventionPage } from './ajout-intervention.page';

describe('AjoutInterventionPage', () => {
  let component: AjoutInterventionPage;
  let fixture: ComponentFixture<AjoutInterventionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutInterventionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutInterventionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
