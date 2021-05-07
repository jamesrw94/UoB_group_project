# User Experience (UX) Design

## Initial ideation

As part of the discovery for our project, we investigated real-world issues, problems and how we could develop them into a serious play application.  Each member was tasked with coming up with potential ideas for the application, these were collated **[here](https://github.com/jamesrw94/UoB_group_project/blob/main/UX_Design/Ideas/general_ideas)**, including the following:
1.	Guessing the ABV of an alcoholic drink
2.	Are you washing your hands for long enough? 20s timer (COVID related).
3.	Prevalence of Fake News

After initial brainstorming, the ideas listed above were investigated as potential projects. Research was performed on implementation, API support and to check for competing applications. During a **[team meeting](https://github.com/jamesrw94/UoB_group_project/blob/main/Sprints_%26_Project_Management/Meeting_Notes/21_02_19.docx)** each idea was evaluated in turn, exploring possible options for implementation. Some ideas (Idea 2) were rejected as they were deemed too simplistic in nature while others were rejected for a lack of resources/API Support (Idea 1). Creating an application that used serious play to highlight fake news quite quickly became our focus.


## Developing the idea

Once we had decided on the topic of fake news as the issue we wanted to highlight, each team-member tried to come up with as many ideas as possible to create an application highlighting this issue that also implements serious play.  These ideas were reviewed and discussed in the next **[meeting](https://github.com/jamesrw94/UoB_group_project/blob/main/Sprints_%26_Project_Management/Meeting_Notes/21_02_23.docx)**.  While researching the background area, we noticed there was quite a lot of websites currently doing variations on fake news reporting.  In order to differentiate from these, we reduced our scope and focused on reporting bias within the UK media, hoping our application will raise awareness of bias within the media.

We used draw.io to collaboratively develop an MVP from the proposals we had done previously.

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/Ideas/User%20Journey/first_draft_flowchart.png" height="512">
</p>

## First Paper Prototype

After the initial idea proved to implement the Serious Play paradigm, we developed a “paper” prototype, which was a low-fidelity representation of the applications design. This step was useful as it allowed us to visualise the concept, determine the layout and expected behaviour of the different pages. Due to the remote nature of our course, we created our **[paper prototype](https://github.com/jamesrw94/UoB_group_project/blob/main/UX_Design/Paper%20prototype.pdf)** with Google Slides as this allowed us to collaborate on it more easily.


<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/paper%20prototype.gif">
</p>


We derived our design heuristics from Jakob Nielsen’s **[Heuristic Evaluation.]( https://miro.medium.com/max/4800/1*zanWlsVz_KYmOkZ2ezkzCw.png)** We wanted to ensure the user always knew where they were with clearly defined titles, and tried to keep the language as clear and playful as possible.  The design was created to reduce the amount of interaction required by the user, and we did not feel a login was required. A second decision was to only allow one question at a time rather than users selecting how many questions they wanted to play, thinking this would be more simplistic. Joe Hedin brought up a design theme based on the television show “Have I Got News for You”.  There was a discussion that this might make the page too “busy”, however we thought adding this to the design would help portray the “play” aspect of the application so the users are more aware that they are playing a game.

This PowerPoint prototype allowed us to perform a virtual walk through the application with 3 people who felt that the design and idea was feasible.  This walk-through was performed in an unstructured manner, concentrating purely on the viability of the application.

The one issue with a paper prototype is the limited interactivity, changing pages on a design or changing PowerPoint slide is different to the interaction the user will have. 

## Identifying Stakeholders

Our project has quite a specific scope, so it was difficult to identify stakeholders beyond the end user.  To help try and identify other stakeholders we brainstormed as a team using the questions from the 2c lecture:

- Will this project impact other people/organizations?

-	Will other people/organizations impact this application?

We identified the following stakeholders after the exercise:

1.	The **end user** is a direct stakeholder, this application is being created for them to try and increase their awareness of bias within the media.  It is important that we gain their input on this study to provide them with the best useability to allow them to get the most from their experience on the application.

2.	**Newspapers** are an indirect stakeholder; they will not use the application however they could be affected by it, for example an end user might decide to buy a different newspaper because they used this website. 

3.	**Celebrities & Public figures** are also indirect stakeholders for the same reason, they could be the topic of a Newspapers headline, and this exposure could potentially impact how an end user views them. 

4.	**Competing applications and quizzes** (examples of these can be seen in the **[Background & Motivation](https://github.com/jamesrw94/UoB_group_project/tree/main/Background_and_Motivation)**) are also an indirect competitor. This application could draw traffic away from their website which would affect their revenue.

As there were so few stakeholders identified we decided not to perform a stakeholder mapping exercise, but rather to discuss each stakeholder and categorise them. End users were decided as high power / high interest stakeholder as they are the stakeholder that can impact the success of our application.  If we don’t fulfil their needs, they will not use the website, and it will fail. The other three stakeholders identified were all classified as low power / low interest as they didn’t interact directly.


## Identifying our Users

### Developing User Personas

It was difficult to define a specific user persona by their age, gender, location and/or career.  We felt people with similar demographic characteristics could consume varying amounts of news from a wide variety of outlets. We also noticed how they consume this media is different and their knowledge levels vary between participants. When researching user persona, we felt focusing on behavioural archetypes/mindsets may better communicate the actions of our users and allow us to understand their needs more clearly. 

Behavioral Mindset 1 - A User using the application to help educate themselves on media bias.

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/EducationalBehavioralMindset.png" width="720" >
</p>

Behavioral Mindset 2 - A User using the application for fun.

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/FunBehavioralMindset.png" width="720" >
</p>

Having hypothetical users in mind allowed us to employ a user-focused design strategy. This resulted in higher-fidelity prototypes and a usable application built iteratively around our users requirements.

### User Story

From this we focused on creating a user story for the end user, using the template provided from the online lectures.

> As an **end user** I would like to **increase my awareness of bias within the UK media** so that I **can make better, and more informed choices about what media I consume.**

## Developing a higher fidelity prototype

The PowerPoint prototype was an incredibly useful tool as it allowed the quick creation of a mock-up of our potential application so we can gain feedback regarding viability from users, however there is limited interactivity. Users aren’t interacting with a mouse and keyboard like they would for the actual product, so their experience is bound to be different.  We decided to look into creating a higher-fidelity protype to try and simulate the interaction between the user and the interface.  If a button on the prototype is pressed, then the appropriate action should occur to mimic the experience of the full application.  This would allow us to gain much more insightful information to help steer the development of our application.  

While researching possible user research tools **[marvelapp](https://marvelapp.com/)** was found, where a higher-fidelity representation of the design was **[created](https://marvelapp.com/prototype/144665he/screen/77130957)**.  Although it is higher-fidelity, there were some limitations because some features such as “drag and drop” could not be implemented.  Flow diagrams of the prototype can be found **[here](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/prototypeflow.jpg)**, and **[here (created by marvelapp)](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/flowmap.png)**.

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/Prototype/marvel.gif">
</p>

## User Tests

### User Survey

Please find the survey questions **[here](https://github.com/jamesrw94/UoB_group_project/blob/main/UX_Design/SEGP%20First%20Survey%20Questions.pdf)**.  

An unmoderated user survey was performed on Google Surveys as it was a free and simple platform to develop on and distribute.  An attempt was made to have answers as open as possible; thought was put into the questions to try and reduce leading questions to prevent our bias from affecting the study.  The survey was released as widely as possible, to try and gain a varied sample.  10 **[responses](https://github.com/jamesrw94/UoB_group_project/blob/main/UX_Design/User%20Feedback/News%20Headline%20Matching%20Website%20Survey%20(Responses).xlsx)** were recovered.

The survey was split into two parts: Pre User-Test and Post User-Test.

The Pre User-Test questions were quantitative demographic questions, used to help gain an understanding of our target demographic. It was assumed that people who signed up to do the quiz would be interested in this topic area, enabling us to get a good picture of who our target audience would be. This pre-user survey provided a lot of useful demographic data to help identify potential users of our application.  People who had completed the survey had been of varying ages, varying professions and from varying areas of the country.  Half of the participants had rated their knowledge of bias in the media as 3/5, suggesting that they might have signed up to try and improve this, the rest considered themselves 4/5 or 5/5.

The Post User-Test questions were mainly qualitative questions relating to the design’s navigation and ease of use.  We also did not have a firm name for the application at this point so also wanted user's input regarding this. 

#### Survey Insights

1.	**The Name of the Single Page Application.**
Our hopes of getting a name for the single page application at this point was still on a knife edge as the users had an almost even split between three different names!

2.	**Some users were confused about the core concept of the game.**
Several users wrote that they were confused about the purpose of the game, and what to do while they were playing.  We felt this could be because the website was not clear enough with what to do on each page, so we recommended adding subtitles on each page to provide users with more guidance.

3.	**Some users accessed the test on mobiles, prototype was not responsive to differing screen sizes.**
This insight prompted a discussion about whether we needed to implement iOS/Android compatibility with the application.  We felt that perhaps angular would be responsive to mobile designs, and that this is something that would be tested once the full design has been produced.

4.	**Prototype Limitations.**
Many users found the prototype difficult to use as it did not have drag and drop functionality.  While some confusion would have been remedied if the first insight had been implemented, a further user test was recommended, and a moderated user test performed to gain more user insights.  



### Moderated User Test

The test was undertaken with two participants from varying backgrounds (one technical and one non-technical).  This method was incredibly useful and allowed the researcher to observe users navigating the prototype, a decision was made that an insight could only be recommended if it was mentioned in both user tests.

#### User Test Insights

1.	**Design of the website** 
During the user tests, they were asked to look at the design of each page.  The users all seemed to enjoy the website’s design, the design helped the users classify the website as “playful” rather than a serious application.

2.	**Name of the Single Page Web Application**
At the end of the test the users were shown a list of potential names for the application as well as being encouraged to think of their own.  Both users felt that “Know the News” was an appropriate name for the application, and as such this name was selected going forward.

3.	**Confusion while operating the application**
Same as in the Survey, people sometimes found it difficult to operate the application, and both recommended having subtitles explaining what to do would help them navigate more easily.

4.	**Question Pages**
The final insight was in relation to the design of the question page.  Two prototype question pages were given to the user to operate.  One had two tweets you had to match up while the other only had one tweet and you had to pick which newspaper the tweet originated from.  Both users preferred having two tweets, mainly as this gave them more of a chance to get it right, as then they could compare two tweets.


### User Research Report

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/UX_Design/User%20Test%20Report.gif">
</p>

A report of the User tests findings and insights was created, a copy of the User Research Report can be found **[here](https://github.com/jamesrw94/UoB_group_project/blob/main/UX_Design/Report.pptx)**. This was presented to the group during a group meeting, the above insights guided several decisions in front and backend applications.

**[&rarr; Sprints & Project Management](https://github.com/jamesrw94/UoB_group_project/tree/main/Sprints_%26_Project_Management)**

**[&larr; Back to Index](https://github.com/jamesrw94/UoB_group_project)**

