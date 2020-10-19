import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoInterventionPage } from './info-intervention.page';

describe('InfoInterventionPage', () => {
  let component: InfoInterventionPage;
  let fixture: ComponentFixture<InfoInterventionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoInterventionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoInterventionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
