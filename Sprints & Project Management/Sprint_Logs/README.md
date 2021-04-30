We ran weekly Sprints, commencing on 29th March 2021.

## Sprint 1, 29/03/21 - 05/04/21
The main goal of our first Sprint was for everyone to get up to date with the technical worksheets.

We also aimed to distribute our user survey, perform moderated user tests, and to start scraping data from Twitter and importing into MongoDB.

[Sprint 1 JIRA board](JIRA_Screenshots/Sprint 1 kanban.png)


The sprint was successful and all our tickets were completed.

Tickets completed were:
* Make the brexit background picture
* Perform moderated user tests
* Add twitter csv files into MongoDB - although we kept the ticket open after sprint completed as we wanted to add next week's files in as well.
* Update survey questions
* Get up to date with worksheets
* Distribute survey


## Sprint 2, 05/04/21 - 12/04/21
The main goals of Sprint 2 were:
* Frontend - get up routing and title page components
* Backend - create functions to pull tweets from DB
* UX - perform user tests

[Sprint 2 JIRA board](JIRA_Screenshots/Start of Sprint 2.png)

The full list of tickets were:
1. Set up routing for components
2. Create report based on moderated user tests
3. Perform show and tells
4. Create function to pull tweets from db
5. Ensure docker image works when pulling from github
6. Consider using dockerhub if docker images not working on github
7. Create topic page component
8. Create title page component
9. Add twitter csv file into MongoDB
10. Choose types of button for title page

Sprint Review:
All tickets were successfully completed. Some points to note were:
* Routing was successfully set up using child component loading. This method of routing could then easily be replicated for other components.
* We considered using using dockerhub to publish our docker image as we weren't sure that docker would work from github  but this was based more out of inexperience using docker. Additionally, we were considering using volumes to persist data, but realised that this would not work between machines. Therefore, we used a script which users must use in order to seed the database. Of course, if the app ever ended up being deployed into a production environment publically, we would be able to use volumes.
* Show and tells were performed within our group. Members of the group would show what they have been working on, including code walk-throughs, which we found to be very useful for everyone to keep abreast of technical and non-technical work.



## Sprint 3, 12/04/21 - 19/04/21
Sprint Goals:
* Connect front end to backend API
* Implement drag and Drop Functionality in front end

[Sprint 3 JIRA board](JIRA_Screenshots/Sprint 3.png)

Tickets:
1. Update the background picture aspect ratio
2. Identify Stakeholders
3. Finalise brexit in Front end
4. Drag and Drop functionality
5. Connect API to Brexit Component

Sprint Review:

We successfully connected the API to the front-end. However, we were still a long way off 'finalising' the front end. Drag and drop functionality was mostly working, but still had some issues. Additioanlly, we needed to load the images of the correct newspaper.

We also identified that each developer had their own separate git branches, and that we were not merging often enough to the dev branch. This was violating the principle of Continuous Integration with the result that we had widely differing branches. We agreed this needed to be resolved in the next sprint - new branches should be for small features, and should be merged regularly.

## Sprint 4, 19/04/21 - 26/04/21
Sprint Goals:
* Focus on documentation
* Improve Continuous Integration

[Sprint 4 JIRA board](JIRA_Screenshots/Sprint 4.png)

Following our review with Allison, we realised that although the technical progress of our app was doing well, we had barely filled out any documentation other than uploading Meeting notes. Therefore we decided to focus on documentation for this Sprint

We assigned  Report sections as shown below, and commenced our work.
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


Following Tuesday's technical session, we decided to implement testing to our project. It was agreed that Phil would be able to do the manual testing as it tied in with his work on the user experience already. Dan and James agreed to come up with 3 automatic tests in the angular repo.

[Sprint 5 JIRA board](JIRA_Screenshots/Sprint5.png)

Sprint Review:


Background and Motivation - Harry
Evaluation - Phil

## Sprint 6, 03/05/21 - 07/05/21
