# Group Working Methods

We chose to use the Scrum format of Agile because we wanted to work towards bitsesize, weekly targets rather than a longer term Kanban approach. As our technical experience developed over time, it made sense to use Scrum Sprint cycles as our expertise increased and we could set realistic targets.

To help us manage the Sprint cycles, we used a JIRA workflow. You can view screenshots of our JIRA backlog board, and Sprint boards, in the [JIRA screenshots](Sprint_Logs/JIRA_Screenshots) folder.

Every Monday, the team came together to perform Sprint Review and Sprint Planning. It was felt that we did not need 2 separate meetings for these ceremonies. Using the JIRA board as the guide, we discussed what had been achieved, what had gone well, what could be improved for next time. We also discussed what tickets we wanted to play in the upcoming sprint. We felt that weekly sprints worked well, and we could adapt the workload each week as needed and due to other course commitments.

Additionally, we were flexible in our approach to Stand-Ups and held them as and when we needed them. This was usually twice per week.

We had two communication channels - primarily a discord server, but also the 'Desk 05' channel in the in the grp-MSc Software Engineering Teams. We mainly used the Discord server to communicate, and found that each member of the group was responsive such that if any one of us was having difficulties with something, someone was usually around to help. Team members often held individual calls / pair programming sessions with one another. The VS Code extension for sharing code was found to be an extremely useful tool when pair programming.

# Team roles

We did not specifically define Scrum roles because we agreed as a group that each member wanted experience of the different roles across the team. For the most part, however, we fulfilled the following roles:


**Everyone to provide brief description of what they did**

###### Phillip Sloan - UX researcher
Phillip worked on the UX part of the project, conducting user tests and creating app prototypes.

###### Dan Chow - Backend developer / system integration
Dan was our main backend developer.

###### Harry Field - Backend Developer / UI developer
Harry worked on the images for the app's UI, and helped with the backend coding.

###### Joe Hedin - Frontend developer
Joe was our main frontend developer.

###### James Wilson - Frontend developer / system integration
James programmed the front-end component routing, and integrated our components with the api service. He also set up the JIRA sprints and maneged the Git workflows.

# Sprints
Please refer to the [Sprint Log](Sprint_Logs/README.md) for a full description of our Sprints, including meeting minutes.

Please refer to the the [Meeting Notes](../Meeting_Notes/README.md) for all of our documented minutes, prior to the start of the Sprints.

All team members were present for each meeting, except for 9th March, which helped to facilitate productivity.

# Git and CI/CD

At the start of the project, before we did any technical development work, we committed most of our work to 'main' as it was just documentation / design based and there wasn't any overlap between individual's work.

When we added in the angular folder, we started to use branches more effectively to work on our own aspects. However, at this stage, we were not performing proper CI/CD and we were not committing regularly to the 'dev' branch. Most of us had our own branches and were updating these individually such that our branches became quite different.

These different branches caused multiple conflicts when it was time to merge our work together. After this had been resolved, we agreed on a process of merging to the 'dev' branch much more frequently. We also agreed that all developers must test their own code before merging to dev. Before merging, we agreed that the developer wishing to merge had to first merge the dev branch into the feature branch to ensure any new changes in dev are picked up. Then, the developer would spin up the application on the feature branch to ensure it worked. If so, the developer could merge, and in the unlikely event that the dev branch was still not working properly, the developer who merged most recently was responsible for fixing it. This approach worked well.

We also raised Pull Requests for others to view, but decided against needing an approval from other developers before merging to 'dev'. This was because a) we could use the Git feature to revert commits if we had to and b) we trusted each other to code correctly and to fix dev if it was broken by the developer's merge.

One difficulty we found was with the node_modules directory being part of .gitignore. If any changes had been made in package.json and merged to dev, whoever pulled the latest copy of dev had to ensure their node_modules were up to date.
