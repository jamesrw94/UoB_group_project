import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrexitComponent } from './brexit.component';
import { fakeAsync, tick} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
//http://localhost:3000/topicpage/brexit
//http://localhost:3000/resultspage
describe('BrexitComponent', () => {
  let component: BrexitComponent;
  let fixture: ComponentFixture<BrexitComponent>;
  let html: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule,DragDropModule],
      declarations: [ BrexitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tweets should appear in correct order after page loads', ()=>{
     //simulating api setting headline
    expect(component).toBeTruthy();
    component.headline_1 = "hello";
    component.headline_2 = "hello again";
    fixture.detectChanges();
    const title1 = fixture.debugElement.query(By.css('.tweet1 p')).nativeElement;
    expect(title1.textContent).toContain('hello');

    const title2 = fixture.debugElement.query(By.css('.tweet2 p')).nativeElement;
    expect(title2.textContent).toContain('hello again');

  })

  it('submit button should indentify correct answers',()=>{
      expect(component).toBeTruthy();
      component.emptybox1.push("PAPER1");
      component.emptybox2.push("PAPER2");
      component.paper_url1 = '../../assets/TheSun.png';
      component.paper_url2 = '../../assets/Telegraph.jpg';
      component.paperName_1= 'TheSun';
      fixture.detectChanges();
      component.submitPredicate();
      fixture.detectChanges();

      const dataService = component.getDataService();
      const result =dataService.getResult();
      expect(result).toEqual(true);
 })

 it('submit button should indentify incorrect answers',()=>{
     expect(component).toBeTruthy();
     component.emptybox1.push("PAPER1");
     component.emptybox2.push("PAPER2");
     component.paper_url2 = '../../assets/TheSun.png';
     component.paper_url1 = '../../assets/Telegraph.jpg';
     component.paperName_1= 'TheSun';
     fixture.detectChanges();
     component.submitPredicate();
     fixture.detectChanges();

     const dataService = component.getDataService();
     const result =dataService.getResult();
     expect(result).toEqual(false);
})

it('check that popup appears when user has not filled both boxes',()=>{
    expect(component).toBeTruthy();
    component.emptybox1.push("PAPER1");
    fixture.detectChanges();
    component.submitPredicate();
    fixture.detectChanges();
    const text = fixture.debugElement.query(By.css('#popupreminder')).nativeElement;
    expect(text.textContent).toContain("Make sure you have filled both drop boxes")

})

});
