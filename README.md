# Mario Univer-CT
Welcome to Mario Univer-CT where here, we aim to aid your learning in COR-IS1702, Computational Thinking (CT). CT is coined as one of the hardest IS modules in SMU due to its steep learning curve given the complexity of content covered over 14 weeks. 

Mario Univer-CT was created with the aim to provide support for students and promote independent learning. Understanding the main concerns - difficulty of content covered as well as heavy pre-class preparation (eg: tutorials, pre-recorded lectures to watch pre-class), we focused on harnessing the most effective elements for learning and placed them into Mario Univer-CT.

# Key Features!
Our application supports the following:
1. Pathfinding Algorithm Visualizer
2. Practice Questions
3. Access to Pre-recorded Lectures 

## HOME PAGE + Review
At the bottom of the home page, users are able to leave their review by selecting the "LEAVE A REVIEW" button. A form will pop up and users are required to fill in their name, their reviews and rating (out of 5 stars)

Once submitted and the page is refreshed, it will displayed their review at the bottom of the page.


## Pathfinding Algorithm Visualizer
1. Dijkstra's Algorithm (weighted):  An algorithm that guarantees the shortest path
2. Depth-first Search (unweighted): A fundamental algorithm to learn in CT, do note that this does not guarantee the shortest path
3. Random Maze Generator: generates walls around the map randomly
4. Dynamic Wall Placement / Dynamic placing of start point / Dynamic placing of end point


HOW-TO:
1. Wait for the walls to be fully loaded
2. Select Tutorial and learn more about our features
3. Move Mario and Princess Peach to wherever you like
4. Select an Algorithm: Dijkstra or Depth-first Search (DFS)

The Pathfinding Algorithm Visualizer will be triggered automatically based on the selected algorithm.

## Practice Questions
Consists of: 
1. Counting
2. Complexity
3. Iteration

HOW-TO: 
1. Select a chapter 
2. From a list of 4 options, select the correct answer
3. If the selected answer is wrong, it will appear red and the solution will appear
4. If answer is correct, it will appear green
5. At the end of the quiz, it will display your final score and you will have an option to try.
6. GOOD LUCK!

## Pre-recorded lectures
Youtube DATA API V3 is used to extract the playlist of pre-recorded lecture videos for students to watch it conveniently without having to toggle back to youtube. 

A search feature to search for a particular professor or topics. 

Youtube playlist taken from: https://www.youtube.com/channel/UCTzqoybeq893ko72GFYb0pA 

HOW-TO: 
1. Once the page is fully loaded, it will display all of the videos from the channel. 
2. Select the video you want if not, you can use the search feature to find:


    a. the topic (E.g mergesort)


    b. the professor (E.g Vivien)


    c. Mid-terms or finals (E.g mid-term)


P.S Due to the limiting quota on the number of queries search per day, the max result displayed will only be 10.

## Setting up
1. On the new terminal of the folder, ENTER npm run serve. (Install npm if needed.)
2. Enter the local server.
3. If permission denied, ENTER:


    rm -rf node_modules/


    THEN:


    npm install


    THEN:


    npm run serve



