JiraJockey
==========

To add to chrome, go to `menu > settings > extensions` check the `Develper mode` box. then  select `Load unpacked extension` and load the JiraJockey directory

Functionality
=============

* Agile Board
  * Shades resolved tickets as grey
  * Sets the goal line as gold bar
  * Shades tickets in the blocked epic as purple
  * Changes color bar on the left edge of tickets to reflect completion status of the task and its subtasks
  * Added images of the assignee to the left of the ticket

* GitHub
  * Changes ticket in title to link to jira ticket 
  * Added a box to the bottom of the first comment in the PR comtaining the commands to pull the pr
  * Converts localhost links in comments to clickable links, displaying only the path
 

* Poller
  * all style changes listed above will execute every tenth of a second for 30 seconds to accommadate for AJAX requests and restyling in both Jira and Git
  * after two minutes of inactiviy on the page, the poller will cease
  * the timer is reset on a mouse move event

To Do
=====


* Git
 * Add post PR option to new PR submissions
 * Disable submit PR button if console logs or writefiles are detected

* Jira
 * Show completion status for dual FE, BE tickets

* json
 * persistant focus on a subprop accross page loads


**Shout out to Adam Bretz for the name**
