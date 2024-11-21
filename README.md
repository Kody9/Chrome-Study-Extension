# Computivity

> Jonathan DeGrasse, Kody Norsworthy, Martin Mendoza, and DJ Pantalone is creating Computivity, a powerful web extension designed to enhance study habits and boost productivity. This tool tracks off-task moments during study sessions, providing users with valuable insights into their study patterns. Computivity aims to help students achieve better grades by understanding and optimizing their study habits. The primary audience for Computivity is students. Whether high school or college, Computivity is tailored to assist students in gaining a deeper understanding of their study habits, minimizing distractions, and improving academic performance. The team is driven by the goal of making a significant impact on students' academic lives. Computivity aims to empower students to make better grades by  offering insights into their study habits. By providing personalized study plans, real-time notifications, and collaborative features, the team hopes to foster positive changes in how students approach their studies. 



## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
 ![Copmutivity Logo](image/image.png)
<!--- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Jira
- BitBucket
- ChatGPT
- Chrome Extensions API


## Features
- Goal Setting Interface
    - This will allow users to set goals for their study sessions. 
    - Users will be using this feature.
    - This is associated with User Story 10.
    - "As a student, I would like to create study goals and track my progress towards these goals so that I can improve my study habits and productivity."
- Session Tracking
    - Allows users to track their study sessions.
    - Users will be using this feature.
    - This is associated with User Story 10.
    - "As a student, I would like to create study goals and track my progress towards these goals so that I can improve my study habits and productivity."
- Break Reminder 
    - Allows users to set break reminders in intervals. 
    - Users will use this feature. 
    - This is associated with User Story 16.
    - "As a user concerned about burnout, I want the website to suggest and encourage short breaks between study sessions, helping me maintain a healthy balance between productivity and relaxation."
- Privacy Control
    - Allows users to input privacy settings into their extension. 
    - Users will be using this feature. 
    - This is associated with User Story 9.
    - "As a user with a busy schedule, I want the website to integrate with my calendar or productivity tools"
- Calendar Tool
    - This will start off as a basic calendar and we will add more functionality as the project progesses.
    - Users will use this tool.
    - This is associated with User Story 9.
- Timestamps
    - Allows users to see timestamped activity.
    - Users will use this feature. 
    - Associated with User Story 15.
- Basic UI
    - Allows users to interact with the extension using a basic UI. 
    - This is no ttied to any specific user story, but it is needed.
    - Users will be using this feature. 
    
## Sprint 1

### Contributions

**Kody:** Enabled users to dynamically manage study sessions and break intervals, offering customizable reminders and session tracking to enhance focus and productivity.

- **Jira Task: Kody - Break Reminder System Interface**
    - [Scrum-49](https://cs3398s24borgs.atlassian.net/browse/SCRUM-49?atlOrigin=eyJpIjoiZGM0MzE2OTA2NzhmNDY5YmE4NjM1NWZjYjNlZjE2NDQiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/branch/BreakReminder)
- **Jira Task: Kody - Break Reminder System Functionality**
    - [Scrum-51](https://cs3398s24borgs.atlassian.net/browse/SCRUM-51?atlOrigin=eyJpIjoiYWRiMzI0MGQ4YzYwNDdiZTliNzZkNmQzOTBmMGJmODYiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/feature/SCRUM-51-break-reminder-system-functionality)
- **Jira Task: Kody - Session Tracking Interface**
    - [Scrum-53](https://cs3398s24borgs.atlassian.net/browse/SCRUM-53?atlOrigin=eyJpIjoiZmFjNWUxYWI5YWIxNDVhNGFlYmU4ZWZjNjUwZmY0MjIiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/feature/SCRUM-53-session-tracking-interface)
- **Jira Task: Kody - Session Tracking Functionality**
    - [Scrum-36](https://cs3398s24borgs.atlassian.net/browse/SCRUM-36?atlOrigin=eyJpIjoiOTgxOWRmZjE5ZDI0NDkwMzg1OWJmMTkwYmJlNzc5M2UiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-36-implement-session-tracking-func)

**DJ:** Created functionality for the Session Tracking button and interface which will allow users to see the duration and topic of previous sessions they've had, created the Goal Tracking button and interface which allows users to set how many hours per week and day they want to study and when sessions finish through the week will show how close you are to completing your set goals based on the amount of hours logged.

- **Jira Task: DJ - Designing the Goal Setting Interface**
    - [Scrum-28](https://cs3398s24borgs.atlassian.net/browse/SCRUM-28),[Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/branch/BreakReminder)

- **Jira Task: DJ - Expanded Goal Setting Features**
    - [Scrum-52](https://cs3398s24borgs.atlassian.net/browse/SCRUM-52),[Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/branch/SCRUM-52-expanded-goal-setting-features)

- **Jira Task: DJ - Implement Timestamped Activity through Archive Page**
    - [Scrum-21](https://cs3398s24borgs.atlassian.net/browse/SCRUM-21),[Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/branch/SCRUM-21-implement-timestamped-activity)


**Jonathan:** Created the user interface that allows the user to navigate through the extension. Created pop-up functionality to the user interface. Did the administrative work to have the extension published (application pending). 

- **Jira Task: Create basic UI for extension** 
    - [Scrum-41](https://cs3398s24borgs.atlassian.net/browse/SCRUM-41?atlOrigin=eyJpIjoiZDVhYTY5ZTlmYWMzNDAxNWIxNGYzYWE4MzJkZGQ2ZjEiLCJwIjoiaiJ9), [Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/d404ffa205e28296d53050878ec2770f6d1bd8de)

- **Jira Task: add basic popup functionality** 
    - [Scrum-48](https://cs3398s24borgs.atlassian.net/browse/SCRUM-48?atlOrigin=eyJpIjoiYmY3MmIwOWU2MGJkNDE1MjlmNjRmMmVmZGMzYzZjNWMiLCJwIjoiaiJ9), [Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-48-add-basic-popup-functionality)

- **Jira Task: Make Extension appear in extensions tab on chrome** 
    - [Scrum-42](https://cs3398s24borgs.atlassian.net/browse/SCRUM-42?atlOrigin=eyJpIjoiZjY5NjBmMmI1Y2I1NDMwMzgxYjE5NzM3YTE2ZmMzMDgiLCJwIjoiaiJ9) , [Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/dbec4d2cdba90d2975355f24d3e7145946d81300)

- **Jira Task: Research** 
    - [Scrum-47](https://cs3398s24borgs.atlassian.net/browse/SCRUM-47?atlOrigin=eyJpIjoiZTNlMGRlNWMzOGI4NDg2YmJiYmZiMmExOTRhNmI3MmMiLCJwIjoiaiJ9) , [Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/470cd01adae11198efa4d44bad35f86b87e53d8f)

**Martin:** Created the basic calendar tool. Created the framework for the privacy controls page located in settings.

- **Jira Task: Design Calendar/Productivity Tool**
    - [Scrum-23](https://cs3398s24borgs.atlassian.net/browse/SCRUM-23), [Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/bbf4b2a62bf4a2051905d25b42254ffebc426602)
- **Jira Task: Design Privacy Controls Screen**
    - [Scrum-27](https://cs3398s24borgs.atlassian.net/browse/SCRUM-27), [Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/49bd6891383862019b4918617439ff081efb14b9)
- **Jira Task: Research**
    - [Scrum-45](https://cs3398s24borgs.atlassian.net/browse/SCRUM-45), [Bitbucket](https://bitbucket.org/cs3398s24borgs/computivity_extension/commits/470cd01adae11198efa4d44bad35f86b87e53d8f)

## Reports
- **Sprint 1 Burnup**
![BurnupChart Sprint 1](images/BurnupChart.png)

## Reflection

**What went well?**

- **Kody** 
    - We did a great job sharing code to build off of each other.

- **Jonathan** 
    - Getting ahead early in the sprint and laying the framework for others to build off in a timely manner.
    
- **DJ** 
    - Being ahead of the curve allowed us to fully implement everything we wanted out of the first sprint in a timely manner so the quality of our work was, in my opinion, top-tier. Happy team happy life.
    
- **Martin**
    - We had a great start to the sprint and completed all the tasks.
    
**What can I do better**

- **Kody** 
    - Better comment on my code so my team can have an easier time understanding what it does and how it works.
    
- **Jonathan** 
    - Using better coding practices so my fellow teammates can understand what I am doing if they need to access parts of my code is another thing that I can do to help my team. I will demonstrate this to my teammates and professor by making my code clean, easy to read, and properly commented. 
    
- **DJ** 
    - Ensure better comments and documentation of the changes I implemented so I and others can reflect on the code later in case something might need to change down the line.
    
- **Martin**
    - Learn more on how to use Gitkraken and its features. 

**What Might Be Impeding Us from Performing Better?**

    - Not meeting outside of class may be impeding us from performing our best.
    
    - Not fully understanding gitkraken as a whole. 
    
    - Lack of contribution in a timely manner, slowing down production progress 
    
    - Inexperience with bitbucket and gitkraken

**What can I do to improve?**

- **Kody** 
    - In the future sprints I will communicate with my team more effectively and work on my comments for my code. My team and instructor will know I am doing better by seeing my communication through slack and increased comments.
    
- **Jonathan** 
    - I plan on collaborating more with my teammates to see what I can do to help them succeed. I also intend to focus on writing more efficient and tidy code so that it's easier to understand for my teammates. I will demonstrate this to the instructor and my teammates by being more involved in the slack channel and by improving my commenting in my code.
    
- **DJ** 
    - Help my teammates if I get ahead while still ensuring my deadlines are met on the project. Also assigning myself more work if I think I can manage it while still helping teammates in the second sprint.
    
- **Martin**
    - Communicate with my teammates better and ask for help when needed.


## Next Steps

**Kody**

- Improve session tracking functionality
- Add data collection for off topic flags
- Sort and display the users data related to study habits and off task flags

**DJ**

- Improve  Session Tracking features to better display information about the session
- Improve Goal Tracking UI
- Create the ability inside of Goal Trackin to set a goal for "Less than X off topic moments"

**Jonathan**

- Improve the overall appearance of the UI
- Improve front-end functionality
- Adjust user navigation functionality

**Martin**

- Make it possible to add tasks in the calendar
- Add a feature that notifies the user when a task is due on their calendar
- Make it to where the extension asks the user to confirm their privacy settings

## Sprint 2

### Contributions

**Kody:**
Enhanced the study session management by introducing a resource library and implementing suggested links for study resources at the start of sessions. This addition aims to provide targeted learning materials, improving study efficiency. I also improved session tracking with customizable reminders for study and break intervals, offering a more structured approach to time management and productivity.

- **Jira Task: Kody - Improve session tracking functionality**
    - [Scrum-55](https://cs3398s24borgs.atlassian.net/browse/SCRUM-55?atlOrigin=eyJpIjoiMjUxNjhjN2VjMjY0NGRmMGFiYTA1MjRkNjM3YzhiMDkiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/4ac9b1ba129cebce8db9522c08ff7dfe79eb7bfc)
- **Jira Task: Kody - implement study topic suggestion links - UI**
    - [Scrum-59](https://cs3398s24borgs.atlassian.net/browse/SCRUM-59?atlOrigin=eyJpIjoiNDI0Y2RjMzI4YWQ0NDhkYjgwYTE5N2RiZWNlOGYyNjYiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/2293e861d5278014bceb97aad35bc1ccc728cd61)
- **Jira Task: Kody - Implement study topic suggestion links - Functionality**
    - [Scrum-58](https://cs3398s24borgs.atlassian.net/browse/SCRUM-58?atlOrigin=eyJpIjoiOTI4ZDEzMzk1NDU5NDA0M2JiMjlhMzQ1MmQzN2JlZmQiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/e4cd98e11430dca40b82965e3347f84b5feaf0b2)
- **Jira Task: Kody - Implement Resource Library**
    - [Scrum-64](https://cs3398s24borgs.atlassian.net/browse/SCRUM-64?atlOrigin=eyJpIjoiMThiN2ZkNDM5MWE5NGY3MWE5ODhlM2IyMTlhM2JkYWIiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/be25f62255655bcbcd72851941b1685a73269746)
- **Jira Task: Kody - Implement Bookmark Feature**
    - [Scrum-76](https://cs3398s24borgs.atlassian.net/browse/SCRUM-76?atlOrigin=eyJpIjoiZDRmNTM0YzRjNTFiNDZhNmFjNDNiY2NlN2VkNzVmMGEiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/023cd33b2d4807e6b4342114ad09bd8ebe1e096f)

**DJ:**
Created an off-opic counter that tracks internally the amount of times a user goes off-topic from their origional search and displays that in session archives along with the session topic and session length. Addtionally, Implemented Chart.js functionality inside within our extension allowing any data we have to be displayed graphically through charts and graphs if we feel the need to do so. Currently Chart.js is just being used so users can see visually the amount of times they go off topic per session but can be expanded in the future.

- **Jira Task: DJ - Create visualization of burnout chart**
    - [Scrum-57](https://cs3398s24borgs.atlassian.net/browse/SCRUM-57),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-57-create-visualization-of-burnout)
- **Jira Task: DJ - Chart.js Research**
    - [Scrum-60](https://cs3398s24borgs.atlassian.net/browse/SCRUM-60),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-60-chart.js-research)
- **Jira Task: DJ - Off-topic counter to display inside of Archived Sessions**
    - [Scrum-61](https://cs3398s24borgs.atlassian.net/browse/SCRUM-61),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-61-off-topic-counter-to-display-in)
- **Jira Task: DJ - Create functionality for burnout chart in unison with session archive**
    - [Scrum-74](https://cs3398s24borgs.atlassian.net/browse/SCRUM-74),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-74-create-functionality-for-burnou)

**Jonathan:**
Improved the overall extension navigation allowing user to navigate through a single page. I did a complete overhaul on the UI for the extension to give it a more modern look. Implemented a flashcard function that allows users to add, edit, and delete flashcards within the Flashcard button. Implemented the front end for a robust achievement system. 

- **Jira Task: Jonathan - Improved navigation**
    - [Scrum-54](https://cs3398s24borgs.atlassian.net/browse/SCRUM-54?atlOrigin=eyJpIjoiOGE3NWE0NDhlYWQ4NDQwZGI0MzA5OGIxNTM0YTJmY2YiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/de2cdc6310d6359c83fc2ad55465de8c5a891003)
- **Jira Task: Jonathan - Implement Achievements front end**
    - [Scrum-63](https://cs3398s24borgs.atlassian.net/browse/SCRUM-63?atlOrigin=eyJpIjoiMzFkZDE0MDVlY2ExNDRkZjg0OWRlYzhmMGU4MTk0YmYiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/a527582b2b63d320f33309c14c14faf502796fc6)
- **Jira Task: Jonathan - Implemented Flashcards function**
    - [Scrum-68](https://cs3398s24borgs.atlassian.net/browse/SCRUM-68?atlOrigin=eyJpIjoiMTMwM2I3MzcxZjg0NDVjMmI2YTFlNmU5MDI4NWFiZjEiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-68-implement-flashcard-feature)
- **Jira Task: Jonathan - Completed an overhaul of the UI**
    - [Scrum-75](https://cs3398s24borgs.atlassian.net/browse/SCRUM-75?atlOrigin=eyJpIjoiMzIzMTkyZWVjYzViNDkwZWFiZjEyOTdiMjIyOTg1MmMiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/1e1565afbf0c3c114847d4ca3f40b307aba73413)
    
**Martin:**
Created the ability to add tasks to user calendar and user recieves notifications when task is coming up. This feature assists the user to keep track of all their tasks. Additionally, I fixed a small bug that did not allow the calendar to update correctly and I added color theme customization option to enhance the user experience.

- **Jira Task: Martin - Calendar Bug Fix**
    - [Scrum-73](https://cs3398s24borgs.atlassian.net/browse/SCRUM-73?atlOrigin=eyJpIjoiNWUyYWNjYzJlZGNlNDBkOTg5OWFkMjZjMmI0OTQ2NDUiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/473b3d91ead58342d0da75be6eb050463e9433ff)
- **Jira Task: Martin - Create Ability to Add Tasks in Calendar**
    - [Scrum-62](https://cs3398s24borgs.atlassian.net/browse/SCRUM-62?atlOrigin=eyJpIjoiY2NlNzViMjc1MjRkNGYwNGEwMWM5MDdmMDBmZmQyZWUiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/a87e2d842ad48ed9ecc8a7a3018d06b6782c28a3)
- **Jira Task: Martin - Make Calendar Customizable**
    - [Scrum-72](https://cs3398s24borgs.atlassian.net/browse/SCRUM-72?atlOrigin=eyJpIjoiZjAxZDVmZTVlNTA4NDAwMGFhNjlkZjYzYzIyZGFiY2EiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/fb2c90c63176806405127c455f031d310589a84c)
- **Jira Task: Martin - Implement Notifications from Calendar Tasks**
    - [Scrum-65](https://cs3398s24borgs.atlassian.net/browse/SCRUM-65?atlOrigin=eyJpIjoiMDI4ZjhiNWQ2YjgxNGY3ODliYzQwMGZjZTRjZGZiZDciLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/2c07e816cb571ae3b506d35f25a58c25d8b7b9cd)

## Next Steps

**Kody**

- Expand resource library for users to have more study material
- Improve off topic flag system
- Implement Session Reflections
- Extensive testing

**DJ**

- Implement the ability in chart.js to show a different bar color on the graph based on day of the week session took place
- Develop customization for graphical display of data
- Implement different graphs to choose from depending on how user wants to visualize data.
- Improve off topic flag system
- Extensive testing

**Jonathan**

- Implement a more robust Achievement / Milestone system for the extension
- Create themes that the user can choose from to change the layout for the entire extension
- Implement settings functionality
- Website blocker functionality for study sessions
- Extensive testing

**Martin**

- Create feature that allows the user to select notification preferences
- Improve calendar/tasks UI so that more than one appear in one day
- Add customization features in settings

## Reports
- **Sprint 2 Burnup**
![BurnupChart Sprint 2](images/Sprint2Burnup.png)

## Reflection

**What went well or maybe not?**

- **Kody** 
    - We worked consistently throughout the sprint, no need for last-minute work or bug testing.

- **Jonathan** 
    - Consistent communication among teammates as well as frequent code pushing helped us identify bugs in each other’s code, and staying on top of our work allowed us to help other’s fix issues with their code. This was a much better sprint in my opinion.
    
- **DJ** 
    - There was great communication during the sprint. Teammates helped each other when it was needed and they could spare time and overall we got everything we wanted done in a timely manner.
    
- **Martin**
    - Consistent work allowed us to ask questions about problems we were having.
    
**What might be impeding us from performing better?**

- **Kody** 
    - I am still working on my comments and documentation of what I have done so my teammates and go back into that code and understand it to complete their task.
    
- **Jonathan** 
    - Correctly assessing task difficulty. I speak for myself in this regard, but 3 of my 4 tasks took much longer than anticipated which caused times between my commits to be a bit more than I would personally like. Breaking my tasks down into smaller tasks that accurately show the time it takes to complete the task will help me perform better, and will lead to an overall increase in the team’s performance.
    
- **DJ** 
    - For me, it was doing the easy task first and leaving the hardest task to the end which ended up causing a lot of stress and panic not knowing if I could properly implement the harder task, scrapping all code, and trying to move to a different variation of chart implementation, etc. when the time came. I could potentially spread out my work more evenly or ensure with certainty something won’t work before scrapping it all and trying another method.
    
- **Martin**
    - Not meeting outside of class might be impeding us. I think we could do much better if we did. 

**What can I do to improve?**

- **Kody** 
    - I will improve my proficiency in JavaScript to contribute more effectively towards the project. The team and instructor will know I am doing better through the increased complexity of the task I work on and my ability to help others with problems they may have.
    
- **Jonathan** 
    - I need to do a better job at thoroughly testing my code before I ask my teammates to look at it. There were a couple of instances where I pushed code for my teammates to review, and there were bugs that I did not catch. Doing this will save me and my teammates time and they will know when they have to do less testing and the professor will see fewer instances of bug fixes in my code. I will also spend more time reviewing recent commits so I can better understand and help my teammates when they run into problems. My teammates and instructor will know of my improvement by my ability to swiftly assist my teammates when needed. 
    
- **DJ** 
    - Learn about more complex and advanced features in chart.js and provide the team with proper documentation on how to implement those features as that is what I spent most of this sprint on and I don’t want my teammates to go through the same struggles with it that I did.
    
- **Martin**
    - I need to do better at assessing the time it would take to complete the tasks I create, because some of my tasks took longer than expected. In the next sprint, where we will be assessing our tasks in terms of difficulty, I hope to assess my tasks in a much better way by spreading out a difficult task into simpler tasks that lead up to the difficult one.

## Sprint 3

### Contributions

**Kody:**
Refined the study experience by curating an extensive resource library, which offers users easy access to a wider array of learning materials. Enhanced session engagement with the introduction of a note-taking tool, enabling students to jot down key points without leaving the study environment. Improved focus and productivity through an updated URL array, ensuring that off-topic browsing is minimized during study sessions. Additionally, a thorough redesign of the break reminder interface now provides a more intuitive and user-friendly platform for managing study intervals and promoting well-being.

- **Jira Task: Kody - Expand Resource Library**
    - [Scrum-69](https://cs3398s24borgs.atlassian.net/browse/SCRUM-90?atlOrigin=eyJpIjoiYmJmZWViN2I4ZmI5NGE1MWFmMjMzYjI5YjljYTExODUiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/commits/fbea9001aba31e0825d07fd8f7751f1e48490553)
- **Jira Task: Kody - Implement a note taking tool**
    - [Scrum-94](https://cs3398s24borgs.atlassian.net/browse/SCRUM-87?atlOrigin=eyJpIjoiYjM1OGM0YmIzZDk2NDk3ZGExNmIyOTIwYzkxZTc2YTciLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/feature/SCRUM-87-implement-a-note-taking-tool)
- **Jira Task: Kody - Update URL array for off topic flags**
    - [Scrum-14](https://cs3398s24borgs.atlassian.net/browse/SCRUM-89?atlOrigin=eyJpIjoiMDJhM2IxNzU2NzBkNDE2ZDg3MzdiN2FhMjIzMTgxYTEiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-89-update-url-array-for-off-topic-)
- **Jira Task: Kody - Complete rework to break reminder interface**
    - [Scrum-16](https://cs3398s24borgs.atlassian.net/browse/SCRUM-93?atlOrigin=eyJpIjoiZjEzNjJhOGU1M2Y2NGQxNDg4OTNhNDU1NTdjZTMxNzUiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-93-complete-rework-to-break-remind)
- **Jira Task: Kody - Fix bug related to off topic counter**
    - [Scrum-14](https://cs3398s24borgs.atlassian.net/browse/SCRUM-92?atlOrigin=eyJpIjoiOGViOGI4ZTc3NzU1NGNmMzhjNjI2N2FiMDdiNThkNzYiLCJwIjoiaiJ9),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/bugfix/SCRUM-92-fix-bug-related-to-off-topic-co)

**DJ:**
Continued to improve upon the Archived Sessions tab by making the graphs reflect a different color based on what day of the week the session took place. This allows users to be able to track on what days did the study which topic, how many off topic moments did they have on a specific day, etc. so they have an easier time visualizing their previous session data. Additionally, functionality was added in the setting menu to completely silence all popup notifications in case a user just wants to have a session going without interruptions and see after how many times they went off topic without the reminder to stay on topic or whatever they might want the setting for.

- **Jira Task: DJ - Make Archived Session graphs reflect a different color based on what day of the week the session took place**
    - [Scrum-77](https://cs3398s24borgs.atlassian.net/browse/SCRUM-77),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-77-make-archived-session-graphs-re)
- **Jira Task: DJ - Implement functionality for enabling and disabling notification settings.**
    - [Scrum-81](https://cs3398s24borgs.atlassian.net/browse/SCRUM-81),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-81-implement-functionality-for-ena)
- **Jira Task: DJ - Fix bug related to off topic counter**
    - [Scrum-88](https://cs3398s24borgs.atlassian.net/browse/SCRUM-88),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-88-fix-bug-related-to-off-topic-co)

**Jonathan:**
Improved the user interface by making sure the layout was consistent throughout. Implemented a website blocker to block common websites that are time-wasters. Implemented Achievements functionality to award achievements based on the total time spent studying on the extension. Helped to debug the off-topic counter bug that was causing issues tracking off-topic sites visited during longer study durations.  

- **Jira Task: Jonathan - Implement a website blocker.**
    - [Scrum- 86](https://cs3398s24borgs.atlassian.net/browse/SCRUM-86),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-86-implement-a-website-blocker)
- **Jira Task: Jonathan - Implement Achievements system backend.**
    - [Scrum- 78](https://cs3398s24borgs.atlassian.net/browse/SCRUM-78),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-78-implement-achievements-backend)
- **Jira Task: Jonathan - Fix UI bug regarding back button.**
    - [Scrum- 79](https://cs3398s24borgs.atlassian.net/browse/SCRUM-79),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-79-fix-ui-bug-regarding-back-button)
- **Jira Task: Jonathan - Update UI for uniform sizing throughout .**
    - [Scrum- 71](https://cs3398s24borgs.atlassian.net/browse/SCRUM-80),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-80-update-ui-for-uniform-sizing-th)
- **Jira Task: Jonathan - Fix bug related to off-topic counter**
    - [Scrum- 91](https://cs3398s24borgs.atlassian.net/browse/SCRUM-91),[Bitbucket](https://bitbucket.org/cs3398s24borgs/%7B2049e03e-4ea6-4265-b72a-933264f916ae%7D/branch/SCRUM-91-fix-bug-related-to-off-topic-co)



## Reports
- **Sprint 3 Burnup**
![BurnupChart Sprint 3](images/Sprint3Burnup.png)


## Next Steps

**Kody**

- Expand resource library for users to have more study material
- Improve off topic flag system
- Make extension downloadable on the chrome store
- Extensive testing

**DJ**

- Allow more datatypes to be tracked for Archived Sessions to give user more graph variety
- Extensive testing for bugs and improvements
- Potential recommendations for staying on topic depending on your off-topic patterns

**Jonathan**
- Update Achievements to include achievements for goals met and low off-topic counts for each session. 
- Allow users to imput websites they wish to be blocked instead of having common websites blocked statically. 
- Device sync setting implemented allowing users to sync study sessions with their mobile device. 


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->

## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
