We ran weekly Sprints, commencing on 29th March 2021.

## Sprint 1, 29/03/21 - 05/04/21
[Link To Minutes](21_03_29.docx)

The main goal of our first Sprint was for everyone to get up to date with the technical worksheets. 

We also aimed to distribute our user survey, perform moderated user tests, and to start scraping data from Twitter and importing into MongoDB.

[Sprint 1 JIRA board](JIRA_Screenshots/Sprint1.png)

Sprint Review:
The sprint was successful and all our tickets were completed. We found our ways of working, (use of Teams and Discord, as previously mentioned) to be a success and by posting questions on our group discord channel we could get help from one another. Each of us was responsive and able to help each other promptly.


## Sprint 2, 05/04/21 - 12/04/21
Please see the following link for the full minutes of the kick-off meeting: [Sprint kick-off minutes](21_04_06.odt).

[Sprint 2 JIRA board](JIRA_Screenshots/Sprint2.png)

The main goals of Sprint 2 were:
* Frontend - get up routing and title page components
* Backend - create functions to pull tweets from DB
* UX - perform user tests

We agreed to perform show and tells, where appropriate, to help each other get up to speed technically. For instance, Dan would demonstrate his backend work, James would do an Angular walkthrough because he had already completed the Angular tutorials.

It was agreed that we would hold off on making more background pictures for the topics pages until we have a full working version of one topic.

We also experienced issues using docker volumes - when members of the team pulled from github, the data was not being transferred. We believed this was because the api calls made by the application exist within the container, which is then wiped when the container is shut down. Dan messaged Tom to try to resolve.

Please see the following link for the full minutes of our meeting on Thursday 9th: [9th April Minutes](21_04_09)

**Sprint Review**

All tickets were successfully completed. Some points to note were:
* Routing was successfully set up using lazy child component loading. This method of routing was scalable, and child pages it was simple to route other components in this way once we had teh first working.
* We considered using  dockerhub to publish our docker image as we weren't sure that docker would work from github, but this turned out to be inexperience on our part and Git worked well with docker images. Additionally, we were considering using volumes to persist data, but realised that this would not work between machines. Therefore, we used a script which users must use in order to seed the database. Of course, if the app ever ended up being deployed onto a production environment server, we would be able to use volumes.
* Show and tells were performed within our group as follows:
  * Dan demonstrated the API connection script
  * James went through Angular project structure and routing.
  * Phil presented his User Research Report 
    
We found show and tells to be extremely useful for everyone to keep abreast of our ongoing work. It was also in keeping with our aim for each of us to gain experience in each aspect of the software development team. We wanted to expand our skills in all areas, and doing show-and-tells enabled each of us to understand each part of the project, both technical and non-technical.


## Sprint 3, 12/04/21 - 19/04/21
Sprint Goals:
* Connect front end to backend API
* Implement drag and Drop Functionality in front end

[Sprint 3 JIRA board](JIRA_Screenshots/Sprint3.png)

**Sprint Review**

We successfully connected the API to the front-end. However, we were still a long way off 'finalising' the front end. Drag and drop functionality was mostly working, but still had some issues. Additionally, we needed to load the images of the correct newspaper.
We also identified that each developer had their own separate git branches, and that we were not merging often enough to the dev branch. This was violating the principle of Continuous Integration with the result that we had widely differing branches. We agreed this needed to be resolved in the next sprint - new branches should be for small features, and should be merged regularly.

Following our review with Allison, we realised that although the technical progress of our app was doing well, we had barely filled out any documentation other than uploading Meeting notes. Therefore, we decided to focus on documentation for the next Sprint.

## Sprint 4, 19/04/21 - 26/04/21
Sprint Goals:
* Focus on documentation
* Improve Continuous Integration

[Sprint 4 JIRA board](JIRA_Screenshots/Sprint4.png)


For documentation, we assigned some of the Report sections as shown below. We did not assign all of them, as we felt this first assignment would provide us with enough work to start with.
Introduction - Harry
System Implementation - Joe, Dan
Sprints & Project Management - James
UX Design - Phil


Sprint Review:
A good start was made to each area. Through Harry and Phil's work, they also realised that it would make sense for them to also write about the Background & Motivation, and Evaluation, respectively.

We successfully merged the most up-to-date feature branch with the 'dev' branch, from which all new branches were branched. Some minor code changes were also made, improving the drag and drop functionality in the front end, and creating more api functions to call data for the results page of our application.


## Sprint 5, 26/04/21 - 03/05/21
Sprint Goals:
* Finish technical work
* Set up testing
* Continue with documentation

[Link to Minutes](../Meeting_Notes/21_04_28.txt)

[Sprint 5 JIRA board](JIRA_Screenshots/Sprint5.png)

Following Tuesday's technical session, we decided to implement testing to our project. It was agreed that Phil would be able to do the manual testing as it tied in with his work on the user experience already. Dan and James agreed to come up with 3 automatic tests in the angular repo.

We hoped to complete, as close to as possible, the technical work this week and have our final MVP ready.

Sprint Review:


## Sprint 6, 03/05/21 - 07/05/21
