import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HlctFktPage } from './hlct-fkt.page';

describe('HlctFktPage', () => {
  let component: HlctFktPage;
  let fixture: ComponentFixture<HlctFktPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlctFktPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HlctFktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
