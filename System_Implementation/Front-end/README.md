# Frontend Write Up

We used the Angular framework for developing the frontend of our application.

### Components
Angular has a modular nature and is built using components. We used a separate component for each of our pages.

### Routing
We used the lazy loading feature of Angular, to ensure that child pages of the Topics page were only loaded when the user clicks on the link.

This involved a separate topics routing module, topicpage-routing.module.ts, which defined the child routes, and used the forChild() method of routing as follows:

```angular2html
@NgModule({
    imports: [
      RouterModule.forChild(topicRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
```

In the higher-level app-routing.module.ts file, we then lazily load the Topic Child pages:

```angular2html
{
    path: 'topicpage',
    loadChildren: () => import('./topicpage/topicpage.module').then(m => m.TopicPageModule)
  }
```

## Homepage component

The homepage is simple but showcases the playful theme of the website and gives users an introduction to its purpose. In user testing of the higher fidelity prototype, there were insights that users were confused at certain points in the design. To address this, on this page a text banner was added to give an explanation about the website and a large-animated start button was added making it easy for people to know where to click.

The start button was animated using CSS which causes the colour to change as well as changing the text displayed on the button, this is done using the hover and after selectors on the start button.

The home page also has a navigation bar across the top which is present on every page to allow easy access to the three main pages homepage, topic page and results page. To do this it was programmed into the app.component.html meaning that it is accessible on every page.

## Topic page component

The topic page displays a number of buttons listing the available topics, each one rerouting the user to the selected page.

The topic page has its own module.TS file which allows us to create subject components within the topic page component and easily reroute the user to these subcomponents. It also allows us to manage all of the modules used within this component.

## Subject components

Each topic page shows two separate tweets, two empty boxes and the logo for two popular newspapers. The task of the user is to read the tweets and try and guess which tweet matches which newspaper and to then drag and drop the respected newspapers logo into the drop boxes.  

Early user testing of the paper prototype showed that users were not given enough information to understand what the site was asking them to do. It was not clear that they were meant to be trying to deduce which tweet came from which paper nor that the newspaper logos were drag-and-drop items meant to be placed in the drop boxes.

To address these issues another text banner was added prompting the users to match the tweets to the paper as well as adding text above the drop boxes letting the user know how to pair the tweets and the paper.

We also applied Nielsen’s design heuristics, including to try and help users recognise, diagnose and recover from errors.  Every other page required the user to click through, while here there was a lot more interaction, so there was more that could potentially go wrong.  One potential error identified was users could click “Submit” before matching the tweets up, if this occurred an error message appeared: “Make sure you have filled both drop boxes” to help the user understand what they did wrong. Once the user has dragged and dropped both newspaper logos the submit button then checks whether the user has got the answer correct and then sets a results variable within the data service allowing the site to retrieve this information on the results page, the user is then redirected to said page.

When a topic component such as brexit is initialised the “receiveData()” function is called, this function then sends a call to our API through the data service and retrieves two papers at random along with a headline for each.

###	Issues faced whilst developing subject components

From the front-end's perspective one of the most challenging part of this page was implementing the drag-and-drop features. This was due to the fact that the drag-and-drop module used, CdkDragDrop is mostly used for creating lists and so to ensure that only one element could be dropped into each box a predicate function was used to check whether the list is empty or not returning a true false value which dictates whether or not an object may be dropped into each list.

Another issues faced whilst designing the frontend for our website was loading in the correct logos for the users to drag and drop. The original hardcoded URLs were replaced by a call to a key/value pair dictionary which when given a papers name will return the URL to the actual image asset which is then displayed, this URL was then set to the variable paper_url1. The issue was that the CDKdragdrop array which held the URLs was originally being initialised to a blank string which we then later attempted to overwrite with the correct URL, however due to the fact that the API took some time to return the paper names the URLs were not being set before the page loaded meaning the paper logos were not appearing. To get around this issue rather than the SRC value in the HTML being set to the variable paper_url1 it calls a getter function which then returns the correct URL and displays the correct image. This works as by the time the function is called the API has returned the paper names and so there is a URL to pull the image.
```angular2html
 <div *ngFor="let item of paperbox1" cdkDrag>
   <img [src]="getimagepb1()" width="250" height="auto">
 </div>
```
```angular2html
  getimagepb1(){
    if(this.paperbox1[0] == "PAPER1"){
      return this.paper_url1;
    }
    return this.paper_url2;
  }
  ```


## Results page component

The first thing that happens on initialisation is that the result from the last question are obtained from the date service as well as the names of the papers which were used for the last question. After that component checks whether or not the user got the answer correct and if so displays a message congratulating and if not informed they are wrong. The stats for the correct, and incorrect answers are then updated so that the number of people who have correctly placed the paper logo with the right to tweet are up-to-date, this information is then pulled from the database and used in two pie charts which visualises the number of correctly answers.

The charts are from the charts.JS module which makes it incredibly easy to create and modify graphs. The information for the graphs is obtained from a call to the function get_paper_status located in the data service which in turn passes the API the two paper names which were used and then returns the number of correct and incorrect answers. 

## 404 page component
This component is a very simple page showing the error message 404 to let the user know that they have entered an invalid URL. This is picked up by the wildcard path located in the app-routing module.

## Current bugs and known issues

There are currently three known issues with the site which had not been fixed due to the fact that they are not “game breaking” and seeing that this is an MVP the time and effort which would be spent fixing them would be more valuable spent elsewhere.

The first of these minor issues occurs when a user has reached the results page and then refreshes the site. When they do this the paper names and statistics are all reset meaning that the paper names are no longer displayed in the graphs show their default statistics which were originally only meant as placeholders.

The second is that the function which is supposed to be updating the correct and incorrect for each paper and doesn't seem to be working meaning that the pie charts consistently show the same numbers even after a player has played through multiple times.

The last is less of an error and more an inconvenience but occurs when the user has dragged the two logos into place. Once this is happened, they cannot be swapped meaning that the user has to submit what they have already inputted. If only one dropbox has been filled the user can still drag the paper logos from the field empty box to the empty empty box.

