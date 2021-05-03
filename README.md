# Know The News

## Group Members
 Name | Role | Picture 
---|---|---
 Phillip Sloan | User research and prototyping | <img src="Sprints_&_Project_Management/Readme_Images/phil.png" width="100">  
Joseph Hedin | Front-end development | <img src="Sprints_&_Project_Management/Readme_Images/joe.png" width="100"> 
Daniel Chow | Back-end development | <img src="Sprints_&_Project_Management/Readme_Images/dan.png" width="100"> 
Harry Field | User-Experience and background research | <img src="Sprints_&_Project_Management/Readme_Images/harry.png"> 
James Wilson | Team Management and front-end development | <img src="Sprints_&_Project_Management/Readme_Images/james.png" width="100"> 

### 1. Introduction
### 2. [Background & Motivation](Background_and_Motivation/Readme.md)
### 3. [System Implementation](System_Implementation/README.md)
### 4. [UX Design](UX_Design/README.md)
### 5. [Sprints & Project Management](Sprints_&_Project_Management/README.md)
### 3. [System Implementation](System_Implementation/README.md)
### 4. [UX Design](UX_Design/README.md)
### 5. [Sprints & Project Management](Sprints_&_Project_Management/README.md)
### 6. Evaluation
### 7. Conclusion


# Introduction
_Know the News_ is a single page web app built to raise awareness of one’s own bias towards the media. As our consumption of media content becomes ever more automated with evolving technologies, one might understandably stereotype media outlets as presenting a consistent, politically biased opinion [1][2].

### Serious Play
Our application hopes to show people how well they really know the voice of newspapers by presenting an interactive quiz-style game. The game involves tasking users with assigning tweets on a chosen topic to their corresponding newspaper and then evaluating the results. Through this process, the user is confronted with an accurate representation of how well they can detect a newspaper's voice (or rather, how well they _Know the News!_). If the user feels they were given a particularly easy/tough question, they can simply keep trying repeatedly as the questions are _randomly_ generated every time from an automatically updated set of tweets. Because of this, users can keep coming back again and again over long periods of time, always finding new questions to be tested with.

### How does it work?
The user selects from a list of pre-defined categories believed to be politically divisive, after which the user is taken to the quiz page. The quiz page displays random tweets on the selected topic from a database which regularly updates through contacting the Twitter API. The tweets are displayed on screen, and users must click-and-drag them to the correct newspaper logo they belong to.

### Project Objectives:
1.	Design and build a functioning single page web application with quiz game functionality
2.	Populate database using Twitter API
3.	Present information back to the user on how accurately they Know the News
4.	Demonstrate that this application can be used to highlight one’s awareness of their own bias towards the media

## Project Structure
 - angular - contains the code for our app
 - JIRA screenshots - screenshots of our JIRA board
 - Data Model - how we envisage our Data schema and data model
 - Twitter API - contains the script we intend to use to retrieve headlines from twitter
 - Ideas - Contains all ideas that for the Serious Play app which we have considered.
 - Meet notes - contains minutes from our meetings
 
# Acknowledgements
Special thanks to all the lecturers on the Software Engineering unit at University of Bristol 2021 for all their help and support. 

# References
    1. Antunovic, D. Parsons, P. Cooke, TR. (2018) ‘’Checking’ and googling: Stages of news consumption among young adults’, Sage, 19(5) 632-648,  Page 635
    2. Lee, T. (2019), ‘The global rise of “fake news” and the threat to democratic elections in the USA’, Public Administration and Policy: An Asia-Pacidfic Journal, 2517-679X, Page 17.
 
