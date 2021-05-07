# Evaluation

## Design Prototyping

### Paper Prototype (Completed 2nd of March)

The first development that occurred after ideation was creating a “paper” prototype on Google Slides.  Because of social distancing, we could not collaborate together on an actual paper prototype.  To combat this, we developed our prototype on a shared Google Slides document while on teams to try and mimic the standard environment as much as reasonably possible.   

#### Paper Prototype Strengths
1.	Assess ideas quickly and remove elements without investing too much time on them if they didn’t work well.
2.	Quick to produce in comparison to higher-fidelity prototypes
3.	It provided a creative outlet for us to work on as a group
4.	It improved our communication by getting us onto the same page and focused on the same design.

#### Paper Prototype Limitations
1.	People interact with paper differently to actual screens, there is limited context to reflect the actual screen environment.
2.	Limited interactivity/context (tweets/content did not change in our paper prototype)

Despite its limitations paper prototyping played a key part in developing our idea, allowing everyone to easily contribute to the design.  While we were collaboratively working, people developed their own versions of pages before we settled on the final design. This quick development of ideas onto “paper” really helped develop the idea into a firm idea.

### Digital Prototype (Completed 9th of March)

The limitations of the paper prototype led us to develop a higher-fidelity prototype of our design. 

#### Digital Prototype Strengths
1.	As the prototype was stored online, it could be shared easily with potential users as an URL in the survey itself.
2.	The digital prototype allowed us to simulate most of the interactions between the user and the application, providing us with a lot more information about their interactions.
3.	We received richer feedback using moderated user testing, allowing more informed, user-centred decisions to be made.


#### Digital Prototype Limitations
1.	It was a lot more time consuming to produce, than paper prototyping.
2.	The platform we used could not fully recreate the application we desired to create.


If given more time, an even higher prototype would have been useful to implement on a platform which had drag and drop.  Despite searching, a better platform could not be found during the design phase of the project.  However **[inVision](https://www.invisionapp.com/)** was found later, which looks to be a tool that could have supported drag and drop, allowing an even higher-prototype to be performed.

We found prototyping to be an incredibly useful tool to ensure a user-centred design is followed. The prototypes allowed us to involve the user in the design process and get feedback on designs before we started coding the application. We found paper and digital prototyping had different strengths and weaknesses, but they were equally useful in the creation and development of our design.

## User Tests

### User Survey (Released 22nd of March)

The survey included pre user test questions on demographics such as age, gender, profession and location. More targeted questions were then asked regarding their knowledge of newspapers.  Once they had performed the user test, they were asked questions related to the design and purpose of the website.

The hope was to be able to gain insights into our target demographic, to be able to improve our design for their user needs.  Several insights were gleaned from the survey which had a direct impact on the design:

1.	The survey was incredibly useful in assigning a name to our application, something we were struggling with a decision on.  
2.	It allowed us to understand that people were having difficulties grasping the concepts within the game, in response we added subtitles to the front end for clarity.
3.	A lot of users were using their mobile phone to test the prototype, which led to a discussion regarding mobile compatibility of the website. 
4.	The fact that the prototype did not have drag and drop features confused a lot of users.

For a full lists of insights please check the **[User Report]( https://github.com/jamesrw94/UoB_group_project/blob/main/UX_Design/Report.pptx)**.  

Reflecting on the questions asked within the survey, there could have been some improvement in this area, which could have generated more detailed insights for example:

> “Now you have played, do you think it has improved your perception of bias in the media?”

and 

> ”Did you manage to do what you wanted on the website?”

These questions were asked too early and should have been used once a fully coded prototype was available.  The prototype they were reviewing had limited functionality, so it makes sense that it would not be as insightful to ask at this time.

Despite the useful information we gained from user surveys, we found there were some limitations to its method:

1.	We could not study user behaviour on the site, to see when they are pausing or where exactly they are getting stuck.
2.	Preparing questions took quite a lot of time to ensure they were worded correctly, ensuring bias and leading questions were removed to the best of our ability.
3.	Difficult to establish what usability problems there are with the product.

The insights (Insight 4 specifically) from the user survey led us to creating a moderated user test, as we felt we wanted more qualitative data to help drive our design forward.

### Moderated User Test (Performed 1st of April / 2nd of April)

During moderated user testing you have the chance to observe the user operating the prototype which can give very different and more comprehensive insights than the user survey provided.  It also provided a platform to allow me to clarify any confusion the user had during the user test, directing them away from features that do not work as intended.

The moderated user test was performed over Zoom – With the participants sharing their screen so I could observe them using the application.  The test was semi-structured, I gave the users a task (play one Brexit question, one Politics question and finally a random question).  While the user was operating the application, if I felt they paused at any point I would probe them for information on why they paused.

Although there was quite a lot of useful information, I made a decision to make something an insight if both users mentioned it during their tasks, otherwise it could just be one user’s opinion.  The insights were:

1.	Both users commented on the “Have I got News for You” theme, from that they thought it was a game or quiz, so it had the intended outcome.
2.	They confirmed the name choice of the application as “Know the News”.
3.	Users commented that they wanted a bit of an explanation of what to do on each component:

> “ I probably expect a bit of an explanation below the title… however it is obvious I am supposed  to click these.”

> “I think from my first impressions that this is a game… I’d be familiar enough to click on the buttons however a bit of an explanation would be best to go with it, so you know how many to pick.”

With the final insight, a mini A/B test was carried out to test two variations of the answer component.  One had two tweets to compare and match up while the second and only one tweet, but two newspapers to choose from.

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Evaluation/ABTest.png">
</p>

The users preferred having two tweets, as they felt having two to compare gave them more of a chance to get it right:

> “I think that one (two tweets) is easier… having one tweet was OK, I mean having two to compare, I suppose if you aren’t too sure, then you’ve got a second chance of realizing which one is which as one might be easier to decide / get it right?”

> “I think it is more obvious that you are incorrect (with 2) however would still be nice to see both tweets”

#### Limitations
1.	Planning, organizing and executing the user tests is time consuming, and a lot more hands on than user surveys.
2.	Documenting the results is also time intensive as the videos had to be replayed to gain quotes, afterwards comparing the user journeys to gain insights.
3.	Moderating bias/errors could have a significant impact on results as the sample size is much lower.

On the whole, user prototyping and testing was an incredibly valuable tool for us to ensure the application would satisfy the user needs. I feel that using both methods complemented each other, where user surveys brought breadth, moderated user tests brought depth. Many useful insights were highlighted by both methods which were later used in the design by the front and back end:

### Heuristic Evaluation

We found Jakob Nielsen’s heuristic evaluation principles incredibly useful to evaluate our designs with, as it gave us ten principles to review and improve our code with.  The front end used these methods to improve the design:

**1. Visibility of the system**
The applications objective was to raise a users awareness of media bias.  The user was guided through the application, and only allowed the user to proceed from one page to the next by clicking a button.  The user was clearly informed of where they were on the site with the help of the title page.  A navigation bar was also inserted to help the user if they got stuck and wanted to go back.

**2. Reliability to the Real World**
To implement serious play we used a quiz to help highlight media bias.  The "Have I Got News for You" theme of the website helped users understand that the site was not meant to be serious, and that it was about Newspapers.

**3. Help users recognize, diagnose, and recover from errors**
The application is quite simple, and the main user interraction that could cause an error was if users tried to submit an answer before dragging and dropping tweets to one of the respective boxes.  An Error messages was applied to the centre of the page if a user attempted to submit in this state, prompting them to drag the logo's into the right place.

**4. Aesthetic and minimalist design**
Each component/page was designed for a specific purpose and once that task had been performed, the user has directed to another page where they would perform another task.  Click **[here](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/SPAFlow.jpg)** for a link to the final SPA flow diagram to see what a user could do on the website.


Despite their usefulness, Nielsen’s design heuristics have started to come **[under criticism](https://uxpamagazine.org/nielsens-heuristic-evaluation/)** as they were developed in the 1990’s, when designs and user interfaces were not as complex as they are now.  Despite these concerns, we feel that they are applicable and relevant to our relatively simple quiz design.


## Unit testing / Functional testing

### Unit Testing

As our group did not have much time to implement an automatic testing reigime we choose to limit our testing to one user journey through the app. Therefore most of our testing revolved around a user answering one topic's questions. We chose this approach for two reasons: 
 1) The code between categories is very similar
 
 2) It felt more important to ensure at least one user journey was completely working, rather than less throughly testing multiple journeys
 
 
 As a result of this, all of our own tests can be found in the Brexit spec file [here](https://github.com/jamesrw94/UoB_group_project/blob/dev/angular/src/app/topicpage/brexit/brexit.component.spec.ts). Our first test was chosen to verify that text appears on the question screen in the right place and the right order. As we could not use the data from our database we had to mock fake tweets instead, this limits the usefulness of the test in part but it was still important to verify that the front end weas doing what it was supposed to.
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
### Functional Testing

Test plans were created to mimic a user’s journey through the website.  Initially we had one test, which went through an entire question, from Homepage to Answer page.  In the end we split this into two defined parts to reduce the complexity of the test plans:

1. **[Navigating to a question](FTNavigatation.md)**
2. **[Answering a question in the quiz](FTQuestionPage.md)**
3. **[Checking the websites responsiveness](FTResponsiveness.md)**

The test plans document a series of steps that the tester needs to perform, and what to expect to ensure the application is working correctly.  There is information on how to start and teardown.

Test 1 was concerned with the user first interacting with the website, and then moving from that point to a valid question page.  Ensuring all the correct elements are loaded on the relevant components (for example, ensuring the topic page loads all the topic buttons, that the question page loads two tweets).

Test 2 was concerned with the user’s interaction with the question page, which is the page with most user interaction.  It contains 4 tests including testing the drag and drop and checking error messages on the submit button.

Test 3 was concerned with the websites responsiveness as raised by the initial User Survey.  The website did not pass this test, only working on a standard desktop environment.  This is due to us not fully utilizing bootstrap while writing the front end.  Unfortunately this was realised quite late into development and would have required a significant amount of time to refactor, requring a significant refactor.  If we have more time this would have been added into the next sprint as a priority as during research a lot of our users used mobile phones.

These tests, although not technical like the Unit Testing were very useful for us as a team as they forced us to think about the design in more detail, and to think in depth about what interactions we might expect from users.

## User Acceptance Testing

User Acceptance Testing (UAT) is performed by the end user to verify/accept the software before moving the software application into production.  It is the final stage of testing after functional and unit testing has been performed.  It is important as although we have developed with the users in mind we have still been developing on our own understanding and interpretation of their needs.  This testing will help us verify if we have achieved our projects goals.

### Methods

A moderated user test was performed via Zoom with 4 users. Insights were gleaned from this when there was a similar interaction or quote was noted from at least 2 users.  The user test was again performed in a semi-structured manner.  First the user was provided the homepage and asked to operate the site, playing as many questions as they would like.  Notes were taken if they paused at any stages.  Once they were finished, they were asked the following question:

> Do you feel this application has influenced your knowledge of bias within the media?

### Findings

The feedback was generally positive, the users did not really pause and felt that the user interface was relatively simple and easy to operate.  From watching user interactions and asking questions afterwards I found the following insights.

> On the question page (especially on Brexit/Racism/Climate) it was difficult to read the “Drag Logo into Box” 
> “Can you place the paper with the tweet” sub-title sometimes made users try and drag the tweet, rather than the logo

When asking the last question, I got the following feedback:

> “I think I would learn from anything that caught me out, or any answers I wasn't expecting”

> ”A lot of them are very obvious… or on the flip side, the fact they are so obvious just shows us how certain publications have an agenda.”

> “If anything, it’s solidified certain views I have regarding certain papers, so I suppose yes it has”

### Implications

The UAT was a success, functionally the application worked for all four participants with very few errors (one user tried to click before they had submitted which brought up an error message as expected).  The provided insights were very useful as they highlighted parts of the design we had not noticed, probably because we have been interacting with the application very closely so knew how everything worked.  I feel the improvements they insights have suggested could quite simply be introduced if we had further sprints to perform them.

The final question was used to try and determine if the website was successful in its primary goal, to try and educate users in media bias, the difference in reporting styles in the media.  Most users felt like the website at least confirmed their suspicions, sometimes the questions were quite simple (tabloid vs broadsheet) but sometimes the users really had to pause and think about it, which is what we wanted to accomplish). 


**[&rarr; Conclusion](https://github.com/jamesrw94/UoB_group_project/blob/main/Conclusion/README.md)**

**[&larr; Back to Index](https://github.com/jamesrw94/UoB_group_project)**
