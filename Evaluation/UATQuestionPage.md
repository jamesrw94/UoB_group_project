# Test Plan 

I want to be able to successfully play the quiz

## Outline/Prerequisites

1.	Using Chrome/Firefox/Safari/Edge Browser.
2.	In a Desktop Environment.

## Setup 

1.	Ensure the application is running on localhost:3000
2.	From the home page, click Enter
3.	Click on a random topic page.

## Teardown
1.	Close the browser
2.	Shut the docker container down.

## 4 Tests

### Test to check error message displays if submit is pressed when tweets aren’t assigned.
1.	Press Submit
2.	Check “Make sure you have filled both drop boxes” appears in the middle of the screen.

### Test to check drag and drop
1.	Drag a logo into a box
2.	Drag the same logo into the other box
3.	Drag the second logo into another box

### Test tweets get loaded via the API
1.	Refresh the page to check new tweets and logos appear on the screen

### Test Submit button
1.	Drag a logo into a box
2.	Drag the second logo into the other box
3.	Press the Submit button
4.	Ensure you have reached the results page
5.	Ensure result has been provided (Correct/Wrong)
6.	Ensure Pie Charts have loaded

