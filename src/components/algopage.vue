<template>
    <div id="navbarDiv">
        <nav class="navbar navbar-expand-sm navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a id="refreshButton" class="navbar-brand" href="#">Let's Visualize!!!!</a>
                </div>
                <button class="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
                        <li class="dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Algorithms
                            </a>
                            <ul class="dropdown-menu">
                                <li id='startButtonDijkstra' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Dijkstra's Algorithm</a></li>
                                <li id='startButtonAStar2' class="navbar-inverse navbar-nav dropdown-item"><a href="#">A* Search</a></li>
                                <li id='startButtonGreedy' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Greedy Search</a></li>
                                <li id='startButtonAStar' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Swarm Algorithm</a></li>
                                <li id='startButtonAStar3' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Convergent Swarm Algorithm</a></li>
                                <li id='startButtonBidirectional' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Bidirectional Swarm Algorithm</a></li>
                                <li id='startButtonBFS' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Breadth-first Search</a></li>
                                <li id='startButtonDFS' class="navbar-inverse navbar-nav dropdown-item"><a href="#">Depth-first Search</a></li>
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
                        <li id='startButtonClearBoard' class="navbar-inverse navbar-nav"><a href="#">Clear Board</a></li>
                        <li id='startButtonClearWalls' class="navbar-inverse navbar-nav"><a href="#">Clear Walls</a></li>
                        <li id='startButtonClearPath' class="navbar-inverse navbar-nav"><a href="#">Clear Path</a></li>
                        <li class="nav-item dropdown">
                            <a id="adjustSpeed" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Speed: Fast
                            </a>
                            <ul class="dropdown-menu d-flex-column">
                                <li id='adjustFast' class="navbar-inverse navbar-nav"><a href="#">Fast</a></li>
                                <li id='adjustAverage' class="navbar-inverse navbar-nav"><a href="#">Average</a></li>
                                <li id='adjustSlow' class="navbar-inverse navbar-nav"><a href="#">Slow</a></li>
                            </ul>
                        </li>
                        <li id='startButtonStart'><button id="actualStartButton" class="btn btn-default navbar-btn me-auto" type="button">Visualize!</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <!-- Tutorial Modal -->
    <div id="mycustommodal tutorial">
        <div class="modal fade" id="tutorialpage1" aria-hidden="true" aria-labelledby="tutorialpage1Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto" id="tutorialpage1Label">Welcome to Algorithm Visualiser!</h1>
                    </div>
                    <div class="modal-body">
                        <h6>We'll take you through a short tutorial and show you the features available in this application.</h6>
                        <img id="mainTutorialImage" src="../assets/styling/welcomeicon.png">
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="skipButton" class="btn btn-default navbar-btn" data-bs-dismiss="modal">Close</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage2" data-bs-toggle="modal">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="tutorialpage2" aria-hidden="true" aria-labelledby="tutorialpage2Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto" id="tutorialpage2Label">What is a pathfinding algorithm?</h1>
                    </div>
                    <div class="modal-body">
                        <h6>A pathfinding algorithm explores routes between nodes and ultimately seeks to find the shortest path between 2 points</h6>
                        <img id="mainTutorialImage" src="../assets/styling/destination.png">
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="skipButton" class="btn btn-default navbar-btn" data-bs-dismiss="modal">Close</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage1" data-bs-toggle="modal">Previous</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage3" data-bs-toggle="modal">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="tutorialpage3" aria-hidden="true" aria-labelledby="tutorialpage3Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto" id="tutorialpage3Label">Algorithms Offered</h1>
                    </div>
                    <div class="modal-body">
                        <h6>Select an algorithm you would like to learn about from the "Algorithm" drop-down menu</h6>
                        Our application currently supports these algorithms
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-4">Dijkstra's Algo</div>
                                <div class="col-md-4">A* Search</div>
                                <div class="col-md-4">Greedy Search</div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6">Breadth-first Search</div>
                                <!-- <div class="col-md-4"></div> -->
                                <div class="col-md-6">Depth-first Search</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="skipButton" class="btn btn-default navbar-btn" data-bs-dismiss="modal">Close</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage2" data-bs-toggle="modal">Previous</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage4" data-bs-toggle="modal">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="tutorialpage4" aria-hidden="true" aria-labelledby="tutorialpage4Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto" id="tutorialpage4Label">Add Ons</h1>
                    </div>
                    <div class="modal-body">
                        <b>Walls:</b> Impenetrable nodes that a path cannot cross
                        <b>Bomb:</b> Additional target for the algorithm before the target node is located, this will also trigger the algorithm to start again at that position!!
                        <br>
                        Access these additional features via the visualizer navbar
                        Click and drag on the start, bomb and target nodes to move them!!
                        <br>
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-6"><img id="AddOnTutorialImage" src="../assets/styling/wall.png"></div>
                                <div class="col-md-6"><img id="AddOnTutorialImage" src="../assets/styling/bomb.png"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="skipButton" class="btn btn-default navbar-btn" data-bs-dismiss="modal">Close</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage3" data-bs-toggle="modal">Previous</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage5" data-bs-toggle="modal">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="tutorialpage5" aria-hidden="true" aria-labelledby="tutorialpage5Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto" id="tutorialpage4Label">Extra Features!</h1>
                    </div>
                    <div class="modal-body">
                        <h6>Use the navbar buttons to clear different objects</h6>
                        You can clear the current path, walls and the entire board!
                        <br>
                        If you want to access this tutorial again, click on "Tutorial" button below the navbar!
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="skipButton" class="btn btn-default navbar-btn" data-bs-dismiss="modal">Close</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage4" data-bs-toggle="modal">Previous</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage6" data-bs-toggle="modal">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="tutorialpage6" aria-hidden="true" aria-labelledby="tutorialpage6Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto" id="tutorialpage6Label">You are all set!</h1>
                    </div>
                    <div class="modal-body">
                        <h6>Have fun learning and visualising the algorithms!!</h6>
                        <img id="mainTutorialImage" src="../assets/styling/welcomeicon.png">
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="skipButton" class="btn btn-default navbar-btn" data-bs-dismiss="modal">Close</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage5" data-bs-toggle="modal">Previous</button>
                        <button id="modalButton" class="btn btn-default navbar-btn" data-bs-target="#tutorialpage7" data-bs-toggle="modal">Finish</button>
                    </div>
                </div>
            </div>
        </div>
        <a id="modalButton" class="btn btn-primary" data-bs-toggle="modal" href="#tutorialpage1" role="button">Tutorial</a>
    </div>
    <div id='mainGrid'>
        <div id='mainText' class="d-flex flex-row justify-content-center">
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

        <div id="algorithmDescriptor">Algo explanation</div>
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