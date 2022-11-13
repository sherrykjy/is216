<script>

export default {
  name: "videosSite",
  data() {
    return {
      youtube_url: [],
      searchValue: '',
      outputURL: []
    }
  },


  created() {
    const querySnapshot = fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTzqoybeq893ko72GFYb0pA&maxResults=10&order=date&key=AIzaSyAZP35nPGmxeb832fKLXT-Tm-NmtVPY97w")
    querySnapshot.then((result) => {
      return result.json()
        .then((data) => {
          let videos = data.items
          videos.forEach(element => {

            this.youtube_url.push({
              videoId: element.id.videoId,
              title: element.snippet.title
            })
          });
        })

    })
    this.outputURL = this.youtube_url
  },
  watch: {
    searchValue(){
      const result = []
      for (let i = 0; i < this.youtube_url.length; i++){
        if (this.youtube_url[i].title.toLowerCase().includes(this.searchValue.toLowerCase())){
          result.push(this.youtube_url[i])
        }
      }
      this.outputURL = result
    }
  }
  

}

</script>
<template>
  <div class="container-fluid">
    <!-- <div class="container-fluid d-block w-100">
      <h1 class="quiz_header">Lesson Videos</h1>
    </div> -->

    <div class="container-fluid d-flex justify-content-center mt-3">
        <input class="search form-control w-50 me-2 mb-3" v-model="searchValue" type="search" placeholder="Search"
          aria-label="Search">
    </div>

    <div class="container-fluid w-100 d-flex">
      <div class="row">
        <div v-for="(title, index) in this.outputURL" :key="index" class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <h6 class="card-header">{{ index + 1 }}. {{ title.title }}</h6>
          <!-- <div class="embed-responsive embed-responsive-16by9"> -->
            <iframe class="w-100" height="300px"
              v-bind:src="'https://www.youtube.com/embed/' + title.videoId"></iframe>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style @scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'mario';
}

body {
  background-image: url("../assets/styling/background2.png");
  color: antiquewhite;
}

.app {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin: 3rem;
  color: black;
}


h6 {
  color: black;
  font-size: small;
  font-weight:bold;

}

@font-face {
  font-family: 'mario';
  src: url('../assets/styling/fonts/mario/SuperMarioWorldTextBoxRegular-Y86j.ttf');
}

/* .result {
  display: inline-block;
} */

/* .container {
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* .card {
  background-image: url("../assets/styling/background2.png");

}

.card-header {
  background-image: url("../assets/styling/background2.png");
  text-align: center;
  margin: 20px;
} */
</style>
