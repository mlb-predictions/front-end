import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInputFormComponent } from './model-input-form.component';

describe('ModelInputFormComponent', () => {
  let component: ModelInputFormComponent;
  let fixture: ComponentFixture<ModelInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
