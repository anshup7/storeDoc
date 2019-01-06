import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDocumentsComponent } from './store-documents.component';

describe('StoreDocumentsComponent', () => {
  let component: StoreDocumentsComponent;
  let fixture: ComponentFixture<StoreDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
