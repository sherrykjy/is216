
<template>
  <div id="mainnavbar">
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <router-link to="/" ><img class='marioimage' src="./assets/styling/mario2.png"
          style="height: 50%;"></router-link>        
    <li>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNav">

        <span class="navbar-toggler-icon"></span>
      </button>
    </li>
    <div class="collapse navbar-collapse" id="navbarNav" style="padding-top:7px">
      
      <ul id="navbar" class="navbar-nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li> 
          <router-link to="/algovisualizer">Visualiser</router-link>
        </li>
        <li>
          <div class="dropdown" id="chapters">
            <button class="nav_chapter btn p-0" type="button" data-bs-toggle="dropdown"
            >
              <a class="chaptername">Chapters</a>
            </button>
            <ul class="dropdown-menu">
              <li v-for="chap of this.chapters" :key="chap">
                <router-link class="dropdown-item" :to="`${chap.hello}`">
                  <span>{{chap.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/videos">Resources</router-link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
<router-view />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
          {name: 'Counting', hello: '/counting'},
          {name: 'Complexity', hello: '/complexity'},
          {name: 'Iteration', hello: '/iteration'}],
    }
  }
}
</script>
<style>
  @import '@/assets/styling/algoStyler.css';

</style>
