# Conclusion #

## Working practices ##

Throughout the project, we found that our working practices worked well and helped us to produce good output together.

We enjoyed working using Scrum methodology as it allowed us to review our work frequently and adapt as necessary. It gave us the ability to change the scope of our MVP as the project progressed, for instance de-scoping a page containing the all-time statistics of number of right and wrong answers. Using Scrum, the whole project was split into manageable chunks of work which was preferable to a more fluid and continuous Kanban style.

We used JIRA to track and manage our issues, which we found to be useful as a 'single source of truth' of our to-do items. The JIRA board formed the basis of our weekly meetings and helped us to keep track of what had been finished, what work was ongoing and what still needed to be started. The ability to assign tickets was useful, so that everyone knew who was responsible for which ticket of work. Also, keeping the ticket status up to date - from 'Todo", to 'In Progress', to 'Done' - was useful as it allowed any of us to see how we were performing mid sprint.

We found that our communication channels worked well, despite Covid restrictions meaning we could not meet face to face. We communicated regularly as a group throughout the entire project via Teams or our Discord server.

Each team member was content with the role they played. As mentioned previously, we did not specifically assign roles at the start of the project, in order to allow us the flexibility to work on multiple different areas of the project, thereby gaining as much skill and experience as possible. In practice, we naturally fell into project roles as time went on, but the success of our communication and show and tells meant that each group member was relatively comfortable in each area and could provide a helping hand if required.

Our use of Git improved over the course of the project, and by the end we were all committing regularly to the dev branch. As mentioned previously in this report (System Implementation and Sprints & Project Management sections), we did not implement CI/CD fully in this project, and this is something we'd seek to implement better next time. 

## Reflective discussion of the success of the project
Overall, the project has successfully accomplished the goals initially set out. The process has been a valuable learning experience for the team as well as an opportunity to engage in group work with notable challenges brought on by the COVID-19 pandemic. We strongly feel that as a group we have risen to these challenges and even adapted to the environment in our favour.

Through the development process, we have successfully created a single page web app with quiz functionality. This application uses a MongoDB database of tweets, regularly updated to keep content fresh and reacts to the user’s engagement in the front end. The front end uses the Angular framework with a Node.js application server. When the user submits answers to the quiz, the database is updated to both inform the user if they were correct and presents overall information on the success of users with regards to the current quiz. Through this mechanism, the user is confronted with the reality of how accurately they Know the News as well as a more general feel of how well other people perform. Through everything outlined here, we have achieved our [projects goals](/README.md/#project-objectives) and look forward to future development opportunities.

Initially, we had hoped to create a final statistics page for the end of the user journey/as a clickable link within the app. This would have served to present the user with information regarding people’s overall success at answering questions regarding all the different newspapers and topics concerning tweets. This service would have been dynamic, with different data loaded in depending on the user’s selected preferences. Once we had created our initial prototype and high-fidelity prototype, we began to suspect that this might not be possible. In the end, this feature could not be developed due to time constraints and represents an abandoned objective but remains as a goal for future development.

While the scope of our project is small, we felt that a positive experience (hopefully a learning experience) was at the core of our motivation as a group and should remain central to our application’s development (as seen in [Background & Motivation](/Background_and_Motivation/#scope)). As demonstrated in our user-acceptance testing, the application can be fun as well as educational. We feel this is a terrific achievement for our team as we understand the challenges in developing an application people want to use. Keeping the user at the centre of our design process enabled periodic checking in order to make sure we were never going completely off course. Furthermore, the lecturers and teaching assistants on this unit from University of Bristol have provided invaluable guidance, always providing honest feedback and nudging us in the right direction should we ever find ourselves drifting. 

While we used user input to help with certain decisions such as the name of the application and the number of tweets to be displayed, the MVP was always a decision we made independently. Keeping the core product definition as something we owned ourselves, we were able to set realistic workload expectations and rarely had tickets carrying over from one sprint to the next.

In some ways, workload management has been made easier by the current pandemic. With the lives of our team members being so constrained, it is easier to plan meetings and communally discuss tickets when the default way to meet is from your computer. We chose not to keep to the strict 10-minute stand-up meetings popular with scrum, because it gave us a chance to catch up socially and run through the status of the project in more detail. Without any other contact outside of meetings, we found it useful to spend more time running through ideas in order to ensure everyone got the best educational experience out of the project as possible. Towards the end of the project, we inevitably began specializing and with this came more granular communication between some team members. In order to combat any disparity on the current state of the application and where it should be, we regularly held meetings with the sole purpose of one team member explaining the work they had been doing to the team in a format like our labs on Teams. Through this, we all gained as thorough an understanding of full stack development as possible, enabling highly engaged collaboration throughout the project despite pandemic-related circumstances preventing in-person meetings.

## Discussion of Social and Ethical implications

As _Know the News_ is in its prototype stage, ethical concerns associated are yet to be fully realised. Typical ethical concerns associated with web applications (and computers in general) in public use are centred around property, privacy, anonymity and security (Himma K and Tavani H. 2008. chapter 6).

The primary/direct stakeholders of _Know the News_ are its users, defined as people with an interest in either playing a game about news media, or developing their knowledge about news media bias. The user testing and prototyping helped develop different personality profiles of the direct stakeholder. The ethical concerns outlined here will be limited to direct stakeholders. Although indirect stakeholders such as the newspapers and any public figures mentioned in tweets could be affected, all information is collected form tweets already in the public domain and therefore presents no immediate concerns related to those outlined in the above paragraph.

_Know the News_ aims to positively contribute to one’s own knowledge of their biases towards media content from various sources. Therefore, the applications function is to alter the user’s perceptions, potentially impacting their mental health, values, expectations and culture. The delicate nature of these paradigms frames this ethical discussion.

In developing _Know the News_, the prototype is iteratively tested. These people are using the prototype application and providing data without written consent. We had to be careful when collecting testing data as from a Deontic perspective, we could have conflicted with GDPR policy, as video data of users engaging with the application was initially discussed (GDPR)[2](Parry O, Mauthner N. 2004). While this footage would not mention the users name or show their face, it would contain their voice, and following the advice of our lecturers we decided it would be the safest ethical decision to remove it from the process. 

The desire to be respectful with users’ personal data has directly impacted overall design aspects of the application. From a consequentialist perspective, we felt that the potential implications of exposing users’ private data were too risky to be considered ethical. With our application development skills in their infancy, we could not provide ourselves with a hard guarantee that we could protect users’ privacy throughout the development process. Because of this, features such as user profiles and persisted session data were not pursued. While this prevented us from implementing features such as a session of quiz questions with an overall score, we feel the core appeal of the app as well as our ethical approach have been preserved. Although Parry and Mauthner put forward that when generating data for research, the ownership of the data should be regarded as belonging to both the researcher and the respondent (Parry O, Mauthner N. 2004), we consider this to be an ongoing discussion we would rather not profess an ultimate answer to.

## Future work ## 

In terms of future work we have found 4 possible avenues to improve the end product. These avenues link directly with our Project objectives.

Our first objective, set out at the beginning of the project, was to design an application with quiz game functionality. Although we achieved this, in the future it would be beneficial to flesh out the quiz further by adding in user sessions and having users answer multiple questions in a row. This would develop the play aspect of our serious play project.

Our second objective was to populate our database using the Twitter API. This objective was met, but it would be even better to develop a system in which new tweets were periodically inserted into the database automatically instead of having to manually insert the json files ourselves. To complement this, we could also introduce a way of selecting topics dynamically from what was currently trending on twitter. This would allow the website to keep its relevance by automatically updating itself without human interference.

The last two objectives of our app were based around highlighting user bias towards the media. In the current app we only show information about the newspapers that featured in the previous question but in the future it would be great to expand this into its own page, where you could get statistics regarding all of the newspapers at once. This could further help highlight the bias within the media as it would allow users to more easily compare each newspapers performance.

The final avenue which we would like to explore would be to make the site more responsive to a variety of devices and/or screen resolutions. Currently the website works as intended on a standard desktop resolution but, due to the absolute design of the website, when used on devices with smaller screens the website becomes unusable with elements starting to overlap. This could be fixed with a tighter integration to bootstrap and using separate CSS files for different sized devices/resolutions.

## References

[1] Himma K and Tavani H. 2008. The Handbook of Information and Computer Ethics.  John Wiley & Sons. Chapter 6

[2] Using personal data in your business or other organisation. Gov.uk .Available at https://www.gov.uk/guidance/using-personal-data-in-your-business-or-other-organisation accessed 3.1.2020.

[3] GDPR Compliance for Apps. Privacypolicies.com Available at https://www.privacypolicies.com/blog/gdpr-compliance-apps/#Key_Elements_Of_The_Gdpr_And_How_To_Comply Accessed 3.1.2020

[4] Parry O, Mauthner N. 2004. Whose Data are They Anyway?: Practical, Legal and Ethical Issues in Archiving Qualitative Research Data. Sage. Issues of ownership.

**[&larr; Back to Index](https://github.com/jamesrw94/UoB_group_project)**
