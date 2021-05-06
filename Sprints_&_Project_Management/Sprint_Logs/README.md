# Sprint Summary

We ran weekly Sprints, commencing on 29th March 2021.

We held Sprint kick-off and Review meetings at the start of each week. It was noted at each Sprint Review that we were happy with our ways of working and methods of communication, and we didn't feel we needed to change. Each team member was making valuable contributions to the team project.

## Sprint 1, 29/03/21 - 05/04/21
[Sprint Kick-off Minutes](../Meeting_Notes/21_03_29.docx)<br>
[Sprint 1 JIRA board](JIRA_Screenshots/Sprint1.png)

#### Sprint Goals:
* Everyone to get up to date with the technical worksheets. 
* Distribute our user survey, perform moderated user tests, 
* Scrape data from Twitter and import into MongoDB.



#### Sprint Review
The sprint was successful and all our tickets were completed. We found our ways of working, (use of Teams and Discord, as previously mentioned) to be a success and by posting questions on our group discord channel we could get help from one another. Each of us was responsive and able to help each other promptly.


## Sprint 2, 05/04/21 - 12/04/21
[Sprint kick-off minutes](../Meeting_Notes/21_04_06.odt).<br>
[Sprint 2 JIRA board](JIRA_Screenshots/Sprint2.png). A full list of Sprint 2 JIRA tickets can be found [here](JIRA_Screenshots/Sprint2_tickets.png)

The main goals of Sprint 2 were:
* Frontend - get up routing and title page components
* Backend - create functions to pull tweets from DB
* UX - perform user tests

We agreed to perform show and tells, where appropriate, to help each other get up to speed technically. For instance, Dan would demonstrate his backend work, James would do an Angular walkthrough because he had already completed the Angular tutorials.

It was agreed that we would hold off on making more background pictures for the topics pages until we have a full working version of one topic.

We were also experiencing issues using docker volumes - when members of the team pulled from github, the data was not being transferred. We believed this was because the api calls made by the application exist within the container, which is then wiped when the container is shut down. Dan messaged Tom to try to resolve.

#### Sprint Review

All tickets were successfully completed. Some points to note were:
* Routing was successfully set up using lazy child component loading. This method of routing was scalable, and child pages it was simple to route other components in this way once we had teh first working.
* We considered using  dockerhub to publish our docker image as we weren't sure that docker would work from github, but this turned out to be inexperience on our part and Git worked well with docker images. Additionally, we were considering using volumes to persist data, but realised that this would not work between machines. Therefore, we used a script which users must use in order to seed the database. Of course, if the app ever ended up being deployed onto a production environment server, we would be able to use volumes.
* Show and tells were performed within our group on Thursday (please see [this link](21_04_09) for the meeting minutes) as follows:
  * Dan demonstrated the API connection script
  * James went through Angular project structure and routing.
  * Phil presented his User Research Report 
    
We found show and tells to be extremely useful for everyone to keep abreast of our ongoing work. It was also in keeping with our aim for each of us to gain experience in each aspect of the software development team. We wanted to expand our skills in all areas, and doing show-and-tells enabled each of us to understand each part of the project, both technical and non-technical.


## Sprint 3, 12/04/21 - 19/04/21 ##
[Sprint 3 JIRA board](JIRA_Screenshots/Sprint3.png)<br>
[Sprint kick-off minutes](../Meeting_Notes/21_04_12.txt)

#### Sprint Goals ####
* Connect front end to backend API
* Implement drag and Drop Functionality in front end

#### Sprint Review ####

We successfully connected the API to the front-end. However, we were still a long way off 'finalising' the front end. Drag and drop functionality was mostly working, but still had some issues. Additionally, we needed to load the images of the correct newspaper.
We also identified that each developer had their own separate git branches, and that we were not merging often enough to the dev branch. This was violating the principle of Continuous Integration with the result that we had widely differing branches. We agreed this needed to be resolved in the next sprint - new branches should be for small features, and should be merged regularly.

Following our review with Allison, we realised that although the technical progress of our app was doing well, we had barely filled out any documentation other than uploading Meeting notes. Therefore, we decided to focus on documentation for the next Sprint.

## Sprint 4, 19/04/21 - 26/04/21 ##
[Sprint 4 JIRA board](JIRA_Screenshots/Sprint4.png)<br>
[Sprint kick-off minutes](../Meeting_Notes/21_04_19.txt)

#### Sprint Goals ####
* Focus on documentation
* Improve Continuous Integration

For documentation, we assigned some of the Report sections as shown below. We did not assign all of them, as we felt this first assignment would provide us with enough work to start with.

Introduction - Harry<br>
System Implementation - Joe, Dan<br>
Sprints & Project Management - James<br>
UX Design - Phil


#### Sprint Review
A good start was made to each area. Through Harry and Phil's work, they also realised that it would make sense for them to also write about the Background & Motivation, and Evaluation, respectively.

We successfully merged the most up-to-date feature branch with the 'dev' branch, from which all new branches were branched. Some minor code changes were also made, improving the drag and drop functionality in the front end, and creating more api functions to call data for the results page of our application.


## Sprint 5, 26/04/21 - 03/05/21
[Sprint kick-off Minutes](../Meeting_Notes/21_04_28.txt)<br>
[Sprint 5 JIRA board](JIRA_Screenshots/Sprint5.png)

#### Sprint Goals ####
* Finish technical work
* Set up testing
* Continue with documentation

Following Tuesday's technical session, we decided to implement testing to our project. It was agreed that Phil would be able to do the manual testing as it tied in with his work on the user experience already. Dan and James agreed to come up with 3 automatic tests in the angular repo.

We hoped to complete, as close to as possible, the technical work this week and have our final MVP ready.

#### Sprint Review ####
* Excellent work from Joe and Dan in finishing off the coding. Our App MVP has been completed
* User testing and functional testing successfully implemented  
* Noted that there is a bug with the results page sometimes not loading the correct review statistics, but we shall note it and move on with a focus on documentation now.
* Documentation still in progress


## Sprint 6, 03/05/21 - 05/05/21 ##
[Sprint kick-off Minutes](../Meeting_Notes/21_05_03.txt)<br>
[Sprint 6 JIRA board](JIRA_Screenshots/Sprint6.png)

#### Sprint Goal ####
* Finish Documentation
* Tidy up code (e.g. where example components still exist)

Main points from Sprint kick-off:
* We agreed that this sprint should only be 3 days in length, finishing on Wednesday, to allow us time for a final review prior to Friday's submission.
* We agreed to hold daily stand ups this week to ensure we remain on track

#### Stand-Up 4th May ####
[Link to Minutes](../Meeting_Notes/21_05_04.txt)

We held a Stand-Up on 4th May to review our progress on documentation. We were making good progress, and only had Conclusion, Evaluation and the video to do, as well as some general proof-reading and tidying up of the project structure.


#### Stand-Up 5th May ####
[Link to Minutes](../Meeting_Notes/21_05_05.txt)

We reviewed our documentation. We were pleased with progress, and only had minor parts of System Implementation, Evaluation and Conclusion remaining.

Joe had also created an excellent video demonstrating the app!<br>

## Review Meeting 6th May ##
[Link to Minutes](../Meeting_Notes/21_05_06.txt)

We had managed to complete our documentation on Wednesday, such that at Thursday's design session, Paul could review our app and report. He provided feedback on the overall look of our app, and the Background & Motivation documentation. <br>

The feedback was positive, with some minor amendments to be made to the report, and for the app to include some more text instructions for the user.

We made the changes Paul suggested as we still had one day until hand in.

<br>
<br>


**[&rarr; Back to:  Sprints & Project Management](https://github.com/jamesrw94/UoB_group_project/blob/main/Sprints_&_Project_Management/README.md)**






