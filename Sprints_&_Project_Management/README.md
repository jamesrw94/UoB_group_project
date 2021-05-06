# Group Working Methods

The Software Development Lifecycle (SDLC) is a framework and methodology for designing and developing a software product efficiently. There are a number of different implementations of this methodology, for instance Scrum, Kanban or Waterfall, but we chose Scrum as we felt it best suited to our needs.

<p align="center">
 <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_&_Project_Management/Readme_Images/sdlc.jpg" width="300" height="300">
</p>

Firstly, and in keeping with the current trends of Software Development in industry, we chose to use Agile rather than a Waterfall approach because we wanted to work iteratively and in small increments. At the start of this project, we did not know what our final product would end up looking like, and so planning in a Waterfall manner made little sense.

In particular, we chose to follow the Scrum form of Agile. Scrum allowed us to work in short weekly Sprints with weekly reviews and demonstrations of the work we had been doing, as well as Sprint reviews to discuss and improve our approach to teamworking. Regularly reviewing our work in this manner enabled us to quickly identify any issues and adapt and update our final product where necessary.

Additionally, we chose to use Scrum rather than Kanban because Scrum offers more ability to plan where required. For instance, using Scrum, we could decide what work was in scope for a particular week, and ensure that we never had more work than we could complete. Kanban is based on a continuous workflow structure where work items are continuously added and worked on. This would not have been helpful for our time-bound project here.


<p align="center">
 <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_&_Project_Management/Readme_Images/scrum.png" width="720">
</p>

We decided upon a Sprint cadence of one week, which we felt to be the appropriate length; small enough to ensure we were meeting regularly to stay on track, and long to allow us to make real progress between each Sprint Review. To help us manage our Sprint cycles, we used a JIRA workflow. You can view screenshots of our JIRA backlog board, and Sprint boards, in the [JIRA screenshots](Sprint_Logs/JIRA_Screenshots) folder. We found JIRA to be an extremely useful tool to keep track of work items, assign them to individuals, and to visualise our Sprints via the Sprint Board filter.

<p align="center">
 <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_&_Project_Management/Sprint_Logs/JIRA_Screenshots/Backlog_3rd_May.png" width="720">
</p>

Every Monday, the team came together to perform Sprint Review and Sprint Planning. It was agreed that we did not need 2 separate meetings for these ceremonies and we were happy to stay online as long as the video call took. Using the JIRA board as the guide, we discussed what had been achieved, what had gone well, what could be improved for next time. We also discussed what tickets we wanted to play in the upcoming sprint. We felt that weekly sprints worked well, and we could adapt the workload each week as needed and due to other course commitments.

We were flexible in our approach to Stand-Ups and held them as and when we wanted to get an update from each other. This was usually twice per week, except for the final week, where we decided to hold them every day.

We had two communication channels - primarily a Discord server, but also the 'Desk 05' channel in the in the grp-MSc Software Engineering Teams. We mainly used Discord to communicate and kept up a regular (daily) dialogue on our group chat which helped to keep us all abreast of developments. We also found that every team members was responsive such that if any one of us was having difficulties with their work, someone was usually around to help. Team members often held individual calls / pair programming sessions with one another. The VS Code extension for sharing code was found to be an extremely useful tool when pair programming.

<p align="center">
 <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_&_Project_Management/Readme_Images/discord.png" width="600" height="400">
</p>

# Team roles

We did not specifically define Scrum roles because we agreed as a group that each member wanted experience of the different roles across the team. For the most part, however, we fulfilled the following roles:

#### Phillip Sloan - UX researcher
Phillip worked on the UX part of the project, conducting user tests and creating app prototypes.

#### Dan Chow - Backend developer / system integration
Dan was our main backend developer.

#### Harry Field - Backend Developer / UI developer
Harry worked on the images for the app's UI, and helped with the backend coding.

#### Joe Hedin - Frontend developer
Joe was our main frontend developer.

#### James Wilson - Frontend developer / system integration
James programmed the front-end component routing, and integrated our components with the api service. He also set up the JIRA sprints and maneged the Git workflows.

# Sprints
Please refer to the [Sprint Log](Sprint_Logs/README.md) for a full description of our Sprints, including meeting minutes.

Please refer to the the [Meeting Notes](Meeting_Notes/README.md) for all of our documented minutes and a summary of those meetings which occurred before the Sprints started.

With the single exception of 9th March, all team members were present for each meeting which helped to facilitate productivity.

# Git and CI/CD

### Continuous Integration

Our use of Git to enable Continuous Integration vastly improved over the course of this project.

Initially, we built a Git repo to hold all of our ideas documentation, and each of us was free to commit to the ‘main’ branch as we were not overlapping with any documents; rather, we we uploading our own ideas and proposals as well as minutes from the meetings.

Then, we added a ‘dev’ branch to make code changes to. Each team member made a branch from ‘dev’ (e.g. “joe’s branch”), for which they could make changes as per the technical worksheets. However, we were not merging our branches back into dev and overtime our branches became quite different from one another. Clearly, we were not performing proper CI.

To connect our backend work with our frontend work, we attempted to merge our branches but experienced multiple conflicts. After this had been resolved, we agreed on a process moving forward of merging to the 'dev' branch much more frequently. We would create new branches for any new feature and ensure the scope of work was small enough so that it could be merged that week (each new branch was equal to one JIRA ticket). Additionally, before merging, we agreed that the developer wishing to merge had to thoroughly check that their code would not break the ‘dev’ branch, and in the unlikely event that it did, they were responsible for fixing it. This approach worked well, and we started to merge much more frequently into ‘dev’.

### Continuous Deployment

We did not set up an automated Continuous Deployment process of shipping our ‘dev’ code to ‘main’ once all tests had passed. This was a missed opportunity and we would seek to implement proper CD from the start if we could do it again. Instead, we manually merged dev into main and vice versa, sporadically, to ensure the branches did not become too different.

In hindsight, the main blocker to CD was a lack of automatic testing in ‘dev’. Had we built in such functionality, we could be confident that when all tests passed on the ‘dev’ branch, we could automatically merge to main, the production-ready branch.

### Additional Git Usage and Comments
One initial difficulty we found was with the node_modules directory being part of .gitignore. Whenever a team member wished to pull another member’s code to review it, if any changes had been made in the node_modules and package.json, whoever was pulling the code had to update their node_modules and sometimes install specific packages. However, once this resolution was identified, we were all able to pull and build each other’s code more regularly and without issues.

We also used the Pull Request functionality on Git, but decided against needing an approval from other developers before merging to 'dev'. This was because a) we could use the Git feature to revert commits if we had to; and b) we trusted each other to code correctly and to fix ‘dev’ if it was broken by the developer's merge. We found Pull Requests useful because all team members could see what code was changing in the repo. 

**[&rarr; Evaluation](https://github.com/jamesrw94/UoB_group_project/blob/main/Evaluation/README.md)**

**[&larr; Back to Index](https://github.com/jamesrw94/UoB_group_project)**
