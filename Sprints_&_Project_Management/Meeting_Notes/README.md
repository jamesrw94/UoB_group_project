# Meeting Notes #

Please see below for a summary of our meetings before Sprints commenced on 29th March. Directly under each heading, you will find a link to the minutes in full.

Every team member was present at each meeting, unless specified otherwise.

Please see the [Sprint Log](../Sprint_Logs/README.md) for a summary of the meetings after the 29th March, the start of our first Sprint.


## 5th February
[Link To Minutes](21_02_05.docx)

We brainstormed some ideas for our web app. Some of our favourite ideas were:
* Colour-blindness test
* Opposit of Plague Inc game - making a vaccine to stop spread of disease
* Piano game similar to guitar hero
* Frequency test for speakers
* Social media / news sites


#### Project Management ####
* Possible use of JIRA
* spread out responsibilities between us - e.g. Scrum Master should not be dedicated to one person


## 19th February ##
[Link To Minutes](21_02_19.docx)

At Thursday's design session, we had discussed an idea about finding a more reliable measure of inflation. We made the decision this would be too challenging to implement with the time we had.

Spoke about the need to consolidate Git repos - currently we have 2 - one for ANgular, one for our ideas.

#### Project Ideas ####
* Guess the unit of cocktail - did not have APi support
* Agreed that something on news bias was our best idea.

Agreed for each member of the team to come up with own proposal and share with the team next week.

JIRA board had been created and we can start to put these tasks there as tickets.

## 23rd February ##
[Link To Minutes](21_02_23.docx)

Everyone presented their briefs for the project. We were broadly aligned and close to finalising our idea - a web app that would allow a user to match a headline with a newspaper and return the result to see if their guess was correct.

We discussed what the UI might look like, and how we would get the data from Twitter.
## 9th March ##
[Link To Minutes](21_03_09.txt)

Apologies: Phil and Joe

Dan had already set up the script which calls the Twitter APi to get our newspaper data.
Discussed using a cron job to get data from twitter at regular intervals to avoid having to pay!

## 11th March ##
[Link To Minutes](21_03_11.odt)

Phil has created a marvel app with our prototypes. We also have an initial wireframe on google sheets.

We sketched out a data model together using the whiteboard on Teams. That model is now on github.

#### Discussion Point ####
* Do we need to track users on our website? How would we handle user data?
* Do we need sessionIDs?

## 18th March ##
[Link To Minutes](21_03_18_Scoping)

This session was on scoping - conceptual, technical, evaluation.

#### Conceptual ####

We want to raise awareness about media bias. Key challenge will be getting this app in front of users that need it most - most likely to be older people who consume the same media from the same outlet. How can we get them to use our app?

#### Technical ####

Agreed no user sessionID or individual user data persisted. Instead, we will hold stats on the overall scores of right/wrong.

#### Evaluation ####

Use of our survey which Phil has already developed.

## 19th March ##
[Link To Minutes](21_03_19)

At a high level, we discussed what we needed to do to be able to move forward and complete this task, and also the skills we needed to learn as a group in order to create a successful app.

We then assigned team members with the ToDo items and also technical areas where they felt proficient enough to take the lead when it came to technical implementation.

## 25th March ##
[Link To Minutes](21_03_25.txt)

We spent most of the meeting sorting out issues that we were experiencing with docker (these were being experienced by the year group as a whole - and related to the volumes in the docker-compose script).

We organised a date for a review by Allison, and spoke with Tom to verify that we were on track.

## 29th March


Start of Sprint 1. Please see the [Sprint Logs](../Sprint_Logs/README.md) for the remaining documentation.


