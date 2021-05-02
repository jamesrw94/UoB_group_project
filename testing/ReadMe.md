As our group did not have much time to implement an automatic testing reigime we choose to limit our testing to one user journey through the app. Therefore most of our testing revolved around a user answering one topic's questions. We chose this approach for two reasons: 
 1) The code between categories is very similar
 
 2) it felt more important to ensure at least one user journey was completely working, rather than less throughly testing multiple journeys
 
 
 
 Our first test was chosen to verify that text appears on the question screen in the right place and the right order. As we could not use the data from our database we had to mock fake tweets instead, this limits the usefulness of the test in part but it was still important to verify that the front end weas doing what it was supposed to.
You can see our first test below-

```
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
  ```
  
  Next we wanted to test that the logic for checking right and wrong answers worked correctly. We felt that was important to the user experience as incorrectly marking answers would be antithetical to our objective of informing users about bias within newspapers.
  The second test can be seen here -
  ```
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

```

In our user testing we found that often users could be confused about what to do at each stage of the quiz. Because of this we thought it would be important to ensure that the pop up banner appears when it should appear on the quiz page as this helps inform the user and creates a smooth user journey.
This test can be seen below:
```
it('check that popup appears when user has not filled both boxes',()=>{
    expect(component).toBeTruthy();
    component.emptybox1.push("PAPER1");
    fixture.detectChanges();
    component.submitPredicate();
    fixture.detectChanges();
    const text = fixture.debugElement.query(By.css('#popupreminder')).nativeElement;
    expect(text.textContent).toContain("Make sure you have filled both drop boxes")

})
```

Finally we wanted to ensure that when an answer was submitted correctly (as in both boxes were filled) the user was taken to the results page immediately. To test this we created a spy on the router and checked that once the button was clicked the router had been called with the correct url.

```
it('check that user gets routed to results page after clicking button',()=>{
    const navigateSpy = spyOn(router, 'navigate');
    expect(component).toBeTruthy();
    component.emptybox1.push("PAPER1");
    component.emptybox2.push("PAPER2");
    component.paper_url2 = '../../assets/TheSun.png';
    component.paper_url1 = '../../assets/Telegraph.jpg';
    component.paperName_1= 'TheSun';
    fixture.detectChanges();
    component.submitPredicate();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['../../resultspage']);
})
```

