# Know The News

Know the News is a single page web app built to raise awareness of one’s own bias towards the media. As our consumption of media content becomes ever more automated with evolving technologies, one might understandably stereotype media outlets as presenting a consistent, politically biased opinion [1][2].

Our application hopes to show people how well they really know the voice of newspapers, by presenting an interactive quiz-style game. The game works by displaying tweets from various newspapers to the user, and then asking the user to match the tweets with their corresponding newspapers. After this, the application tells the user how well they’ve done, as well as provide information on how well people using the application have done in general.

How does it work?
The user selects from a list of pre-defined categories believed to be politically divisive, after which the user is taken to the quiz page. The quiz page displays random tweets on the selected topic from a database which regularly updates through contacting the Twitter API. The tweets are displayed on screen, and users must click-and-drag them to the correct newspaper logo they belong to.

Project Objectives:
1.	Design and build a functioning single page web application with quiz game functionality
2.	Populate database using Twitter API
3.	Present information back to the user on how accurately they Know the News
4.	Demonstrate that this application can be used to highlight one’s awareness of their own bias towards the media

# Prototype

Please find our wireframe at this link: https://marvelapp.com/prototype/144665he/screen/77129293

# Survey

We have produced a survey for users to complete once they used the app: https://docs.google.com/forms/d/e/1FAIpQLScVcWFPNb6wUZRy36ce8UjPXqiRm6ioFgZKw1wM78h9gpyTsw/viewform

# Group Members
* Phillip Sloan
* Joseph Hedin
* Daniel Chow
* Harry Field
* James Wilson

# Project Structure
 - angular - contains the code for our app
 - JIRA screenshots - screenshots of our JIRA board
 - Data Model - how we envisage our Data schema and data model
 - Twitter API - contains the script we intend to use to retrieve headlines from twitter
 - Ideas - Contains all ideas that for the Serious Play app which we have considered.
 - Meet notes - contains minutes from our meetings

# Background 
There is no shortage of general knowledge quiz websites such as [JetPunk](https://www.jetpunk.com/), [Buzzfeed Quizzes](https://www.buzzfeed.com/uk/quizzes), [Challenge the brain](https://www.challengethebrain.com/), [Quiz UK](http://www.quiz.co.uk/) and [Sporcle](https://www.sporcle.com/). While these are great fun, and can increase one’s knowledge of certain topics, we feel that there is scope for this paradigm to be expanded into a more serious direction. While quiz websites certainly work withing the paradigm of Serious Play, the emphasis is more on Play, and less on Serious. With no clear objective/issue implicit in the implementation of these quiz sites, we’ve delved a little deeper to uncover where quizzes might be used in order to help raise awareness of cultural issues we might currently be blind to recognising within ourselves.

One area which seems to have some traction is media bias and fake news. A few websites currently exist with the goal of somehow improving the general public’s awareness of their own actions online through the quiz format. Below is a brief overview of some websites taking this approach:

1.	[Should you share it?](https://newslit.org/educators/resources/should-you-share-it/) – Targets fake news as the problem to solve and aims to improve their users’ awareness of what content is likely fake or reliable so that they can better decide what to share with others in the future. Through this, the project hopes to reduce the amount of fake news circulating the web.
![Should You Share It?](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_%26_Project_Management/Readme_Images/ShouldYiuShareIt.png)

2.	[University of Akron Fake News Quiz](https://akron.qualtrics.com/jfe/form/SV_2bhqIwpegOtj5yZ) – Without a clear agenda outwardly specified on their site, this quiz game will be treated as a stand-alone idea. The quiz asks users to decide whether various news clippings are credible. The user is provided with links to the sources of the clippings, and then asked if they are legitimate stories. After the user decides, the right answer is revealed along with some information about how certain features made it more/less likely to be reliable news.
![University of Akron Fake News Quiz](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_%26_Project_Management/Readme_Images/Akron.png | width="300")

3.	[Facticious](http://factitious.augamestudio.com/#/) - Without a clear agenda outwardly specified on their site, this quiz game will be treated as a stand-alone idea. Like the University of Akron example, this quiz works by asking users to determine if a news clipping is real or fake. The name of the source is initially hidden, and only provided to the user after a button click. Unlike the previous example, this game features a points-based system, whereby a user gains/losses points based on their answers to the questions.
![Facticious Question](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_%26_Project_Management/Readme_Images/Facticious_Question.png)
![Facticious Answer](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_%26_Project_Management/Readme_Images/facticious_answer.png)

4.	[ClearThinking](http://factitious.augamestudio.com/#/) – A USA targeted political ideology affiliation test. A user’s political ideology is evaluated through a set of general knowledge questions surrounding areas believed to be of political significance such as environmental concerns and the economy. The user is then scored based on their answers regarding each of these categories, and this is then used to determine a user’s political leanings.
![ClearThinking](https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/Sprints_%26_Project_Management/Readme_Images/clearerThinking.png)

The emphasis in these quiz sites is placed on fake news and political leanings, but we feel there is a more fundamental issue at hand. We feel that, through many of the mechanisms being highlighted in the above quiz sites, there is a societal tendency to stereotype media sources as having a tone of voice that is permanently wrong or simply biased against the world narrative they believe. 

We feel that media bias is a growing problem in society with the potential to have significant impact over government and culture [2]. Ownership and accountability for information seems to be watered down on a daily basis, and people are finding it difficult to navigate the mass of conflicting narratives [3]. We are concerned that because of this, people are increasingly gravitating towards narrative camps where their world view is represented consistently by a select few media sources, leading to division between camps [4] and an inherent sense of mistrust [2].

The quiz-based websites highlighted above demonstrate a current standard we can draw from in order to tackle the societal issues in a fun and accessible way. With the general popularity of the quiz-based game on the internet, it seems like the perfect vehicle to challenge, entertain and educate our potential users in a format familiar to them.

The simplicity of the quiz format will enable us to strip back unnecessary functionality and focus on the core benefit to the user. With the problem of information bias being such a polarising topic, we feel that a quiz game built to reveal one’s own biases in the media would be the best way to build upon the industry work carried out to date.

While we understand the scale of the problem to be well beyond any scope of a university group project, we hope that through this experience we can:
1.	Encourage our users to think more about their own biases and make a proactive effort to measure their opinions.
2.	Facilitate a culture within ourselves of developing tools with an eye for the personal and societal impact of our work as we continue with the course and on to professional environments.

 
# Acknowledgements
Special thanks to all the lecturers on the Software Engineering unit at University of Bristol 2021 for all their help and support. 

# References
    1. Antunovic, D. Parsons, P. Cooke, TR. (2018) ‘’Checking’ and googling: Stages of news consumption among young adults’, Sage, 19(5) 632-648,  Page 635
    2. Lee, T. (2019), ‘The global rise of “fake news” and the threat to democratic elections in the USA’, Public Administration and Policy: An Asia-Pacidfic Journal, 2517-679X, Page 17.
    3. Safieddine, F. Masri, W. Pourghomi, P. (2016) ‘Corporate Responsibility in Combating Online Misinformation’, International Journal of Advanced Computer Science and Applications, Vol 7, No.2.
    4. Fuchs, C. 2021, Social Media, A Critical Introduction, Sage Publications ltd, London. Page 218.
 
