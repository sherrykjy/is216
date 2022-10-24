<template>
    <div id="navbarDiv">
        <nav class="navbar navbar-expand-lg navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a id="refreshButton" class="navbar-brand" href="#">Let's Visualize!!!!</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <ul class="nav navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Algorithms
                        </a>
                        <ul class="dropdown-menu">
                            <li id='startButtonDijkstra' class="navbar-inverse navbar-nav"><a href="#">Dijkstra's Algorithm</a></li>
                            <li id='startButtonAStar2' class="navbar-inverse navbar-nav"><a href="#">A* Search</a></li>
                            <li id='startButtonGreedy' class="navbar-inverse navbar-nav"><a href="#">Greedy Best-first Search</a></li>
                            <li id='startButtonAStar' class="navbar-inverse navbar-nav"><a href="#">Swarm Algorithm</a></li>
                            <li id='startButtonAStar3' class="navbar-inverse navbar-nav"><a href="#">Convergent Swarm Algorithm</a></li>
                            <li id='startButtonBidirectional' class="navbar-inverse navbar-nav"><a href="#">Bidirectional Swarm Algorithm</a></li>
                            <li id='startButtonBFS' class="navbar-inverse navbar-nav"><a href="#">Breadth-first Search</a></li>
                            <li id='startButtonDFS' class="navbar-inverse navbar-nav"><a href="#">Depth-first Search</a></li>
                            <!-- <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mazes &amp; Patterns
                        </a>
                        <ul class="dropdown-menu">
                            <li id='startButtonCreateMazeTwo' class="navbar-inverse navbar-nav"><a href="#">Recursive Division</a></li>
                            <li id='startButtonCreateMazeThree' class="navbar-inverse navbar-nav"><a href="#">Recursive Division (vertical skew)</a></li>
                            <li id='startButtonCreateMazeFour' class="navbar-inverse navbar-nav"><a href="#">Recursive Division (horizontal skew)</a></li>
                            <li id='startButtonCreateMazeOne' class="navbar-inverse navbar-nav"><a href="#">Basic Random Maze</a></li>
                            <li id='startButtonCreateMazeWeights' class="navbar-inverse navbar-nav"><a href="#">Basic Weight Maze</a></li>
                            <li id='startStairDemonstration' class="navbar-inverse navbar-nav"><a href="#">Simple Stair Pattern</a></li>
                        </ul>
                    </li>
                    <li id='startButtonAddObject' class="navbar-inverse navbar-nav"><a href="#">Add Bomb</a></li>
                    <li id='startButtonStart'><button id="actualStartButton" class="btn btn-default navbar-btn" type="button">Visualize!</button></li>
                    <li id='startButtonClearBoard' class="navbar-inverse navbar-nav"><a href="#">Clear Board</a></li>
                    <li id='startButtonClearWalls' class="navbar-inverse navbar-nav"><a href="#">Clear Walls &amp; Weights</a></li>
                    <li id='startButtonClearPath' class="navbar-inverse navbar-nav"><a href="#">Clear Path</a></li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Speed: Fast
                        </a>
                        <ul class="dropdown-menu">
                            <li id='adjustFast' class="navbar-inverse navbar-nav"><a href="#">Fast</a></li>
                            <li id='adjustAverage' class="navbar-inverse navbar-nav"><a href="#">Average</a></li>
                            <li id='adjustSlow' class="navbar-inverse navbar-nav"><a href="#">Slow</a></li>
                        </ul>
                    </li>
                </ul>
              </div>
          </nav>
    </div>
    <div id="tutorial">
        <h3>Welcome to ACE Algorithm Visualiser!</h3>
        <h6>We'll take you through a short tutorial and show you the features available in this application.</h6>
        <div id="tutorialCounter">1/6</div>
        <img id="mainTutorialImage" src="../assets/styling/welcomeicon.png">
        <button id="nextButton" class="btn btn-default navbar-btn" type="button">Next</button>
        <button id="previousButton" class="btn btn-default navbar-btn" type="button">Previous</button>
        <button id="skipButton" class="btn btn-default navbar-btn" type="button">Skip Tutorial</button>
    </div>
    <div id='mainGrid'>
        <div id='mainText'>
            <ul>
                <li>
                    <div class="start"></div>Start Node
                </li>
                <li>
                    <div class="target"></div>Target Node
                </li>
                <li id="bombLegend">
                    <div class="object"></div>Bomb Node
                </li>
                <li id="weightLegend">
                    <div class="borderlessWeight"></div>Weight Node
                </li>
                <li>
                    <div class="unvisited"></div>Unvisited Node
                </li>
                <li>
                    <div class="visited"></div><div class="visitedobject"></div>Visited Nodes
                </li>
                <li>
                    <div class="shortest-path"></div>Shortest-path Node
                </li>
                <li>
                    <div class="wall"></div>Wall Node
                </li>
            </ul>
        </div>
        <div id="algorithmDescriptor">Pick an algorithm and visualize it!</div>
        <table id='board'>
            
        </table>
    </div>
</template>

<script>
// import "@/components/bundle.vue";
export default {
    name: "AlgoPage",
    mounted() {
        const bundle = require("../components/bundle.vue");
    }
}
</script>

<style scoped>
    @import '@/assets/styling/cssBasic2.css';
    
</style>