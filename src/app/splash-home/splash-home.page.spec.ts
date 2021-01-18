import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplashHomePage } from './splash-home.page';

describe('SplashHomePage', () => {
  let component: SplashHomePage;
  let fixture: ComponentFixture<SplashHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
