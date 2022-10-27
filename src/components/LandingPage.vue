<template>
    <div>
    <ul id="navbar">
        <li>
            <a href="#"> <img id="logo" src="../assets/styling/logo.png"> </a>
        </li>
        <li> 
            <a href="#"> Visualiser </a> 
        </li>
        <li> 
            <a href="#"> Practice </a> 
        </li>
    </ul>
</div>

<div id="first">
    <h1>Ace Computational Thinking with ACE</h1>
</div>

<div id="features" >
    <div class="row justify-content-center">
        <div class="col-2">
            <p style="text-align: center; "> <img src="../assets/styling/tick.png" style="width: 30;"> 
                Visualise Algorithms </p>
        </div>
        <div class="col-2">
            <p style="text-align: center; "> <img src="../assets/styling/tick.png" style="width: 30;"> 
                Calculate Complexity </p>
        </div>
        <div class="col-2">
            <p style="text-align: center; "> <img src="../assets/styling/tick.png" style="width: 30;"> 
            Practice Questions </p>
        </div>
    </div>
</div>

<div class="intro">
    <video controls autoplay muted>
        <source src="../assets/styling/test.mp4" type="video/mp4">
    </video>
</div>

<div class="reviews">
    <h2 id="second">Hear from our users</h2>

    <div class="row justify-content-center">
        <div class="col-3">
          <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">
                    <img src="../assets/styling/logo.png" style="width: 30px; display: inline-block;">
                    Ben One
                </h5>
              <hr>
              <p class="card-text">I love this app!</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">
                <img src="../assets/styling/logo.png" style="width: 30px; display: inline-block;">
                    Ben Two
              </h5>
              <hr>
              <p class="card-text">This website helped me get an A.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">
                <img src="../assets/styling/logo.png" style="width: 30px; display: inline-block;">
                    Ben Three
              </h5>
              <hr>
              <p class="card-text">Woohhoo</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "LandingPage",
}
</script>

<style scoped>
@import '@/assets/styling/homepage.css';

</style>