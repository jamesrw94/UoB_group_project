import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PoliticsComponent } from './politics.component';
import { RouterTestingModule } from '@angular/router/testing';
import {DragDropModule} from '@angular/cdk/drag-drop';

describe('PoliticsComponent', () => {
  let component: PoliticsComponent;
  let fixture: ComponentFixture<PoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,RouterTestingModule,DragDropModule],
      declarations: [ PoliticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
