# Frontend Write Up


## Homepage component
The homepage is simple but showcases the theme of the website and gives the users and introduction to its purpose. In early user testing of the paper prototype of the site which can be seen in the UX write-up, users were originally confused to the purpose of the site. To address this a text banner was added to give an explanation and a large animated start button was added making it easy for people to know where to click.

The start button was animated using CSS which causes the colour to change as well as changing the text displayed on the button, this is done using the hover and after selectors on the start button.

The home page also has a navigation bar across the top which is present on every page to allow easy access to the three main pages homepage, topic page and results page. To do this it was programmed into the app.component.html meaning that it is accessible on every page.

## Topic page component

Each topic page shows two separate tweets two empty boxes and the logo for two popular newspapers. The task of the user is to read the tweets and try and predict which tweet matches which newspaper and to then drag and drop the respected newspapers logo into the drop boxes.

Early user testing of the paper prototype showed that the users were not given enough information to understand what the site had asked them to do. It was not clear that they were meant to be trying to deduce which tweet came from much paper nor that the newspaper logos were drag-and-drop items meant to be placed in the drop boxes.

To address these issues another text banner was added prompting the users to match the tweets to the paper as well as adding text above the drop boxes letting the user know how to pair the tweets and the paper.

From the front-end's perspective the most challenging part of this page was implementing the drag-and-drop features. This was due to the fact that the drag-and-drop module used, CdkDragDrop is mostly used for creating lists and so to ensure that only one element could be dropped into each box a predicate function was used to check whether the list is empty or not returning a true false value which dictates whether or not an object may be dropped into each list.
