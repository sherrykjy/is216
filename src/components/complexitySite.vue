<script>
import { ref, computed, onMounted } from 'vue'
import { db } from '../../firebase/index.js'
import { collection, getDocs, doc } from 'firebase/firestore';

export default {
  name: "complexitySite",
  data() {
    return {
      questions: [],
      question: {},
      answer: [], 
      explanation: {},
      id: {},
      option: {},
      selected: [],
      quizCompleted: ref(false),
      currentQuestion: 0,
      currentExplanation: 0,
      score:0,
      counter:0
    }
  },

  methods: {
    checkAnswer(opt, isCorrect){
        this.score += isCorrect;
        this.counter++;
        this.answered = opt;
    }
  },
  
  computed: {
    getscore(){
        this.counter;
        return this.score;
    },

    getpercentage(){
      return (this.score/this.questions.length) * 100
    }

    },
  created() {
    const querySnapshot = getDocs(collection(db, "complexity"))
    querySnapshot.then((result) => {
      result.forEach((doc) => {
        var data = {
          answer: doc.data().answer,
          explanation: doc.data().explanation,
          id: doc.data().id,
          option: doc.data().option,
          question: doc.data().question
        };
        this.answer.push(parseInt(doc.data().answer));
        this.selected.push(0);
        this.questions.push(data);
      }
      )
    })
  }
}

</script>
<template>
<div id="countingquiz">
  <div class="container-fluid">
    <div class = 'col col-xs-12 col-sm-12 col-md-12 col-lg-12 mx-1'> 
    <section v-if="currentQuestion < questions.length">
  
    <div class="quiz_header d-flex justify-content-center">
        
        <img class = 'title' src="../assets/styling/findmario.png">
    </div>
      <div v-for="(item, index) in questions" v-bind:key="index">
        <section class="quiz"   v-if="index == currentQuestion">
        <div class="quiz-info">
            <span class="question">{{item.question}}</span>
            <div class = 'wrapper d-none'>
                <div class="score" style ="font-size: 20px;"> 
                    {{getscore}} / {{questions.length}}
                </div>
            </div>
        </div>
        <div class="options text-center" v-for="(opt, opt_index) in item.option" v-bind:key="opt_index">
            <label class='option' :class="this.answered == opt && [opt_index == item.answer ? 'correct' : 'wrong']">
                <input type="button" @click="checkAnswer(opt, opt_index == item.answer)" :disabled="this.answered">
                <span>{{opt}}</span>
            </label>
            <div class = 'explanation' v-if="this.answered == opt && opt_index != item.answer"> 
                <div class="explanation_text">

                </div>{{item.explanation}}
            <img class = 'bowser' src="../assets/styling/bowser.png"></div>
            <div class = 'explanation_mario' v-if="this.answered == opt && opt_index == item.answer"> 
                You're getting good at this-a game!
            </div>
        </div>
        <div class="nextbtn d-flex justify-content-center">
            <button class = 'nextquestion rounded' @click="currentQuestion < questions.length ? currentQuestion++ : false; this.answered = 0;"> Next Question</button>
        </div>
    </section>
    </div>
    </section>
    
  
  
    <section class="quiz_header mx-auto" v-else>
  
      <div class = 'col'>
          <img class="w-100" v-if="this.score == 10" src="../assets/styling/congrats.png">
          <img v-else src="../assets/styling/studyharder.png">
  
        <div class="score_card card mx-auto mb-2" style="max-width: 18rem;">
          <div class="card-header" style="background-color: #fbd000;">Score</div>
          <div class="card-body">
            <h5 class="card-title">Total Mario Found: {{getscore}} / {{questions.length}} </h5>
          </div>
        </div>
        <div class="d-flex justify-content-center">
        <a href="/complexity" class = "router-link-active route-link-exact-active"> <button class = 'tryagain rounded'> Try Again </button></a>
        </div>
      </div>
  
      </section>
    </div>
  </div>
  
  </div>
</template>
<style @scoped>

.wrapper{
  position: relative;
  /* bottom: 3rem; */
}

@font-face {
    font-family: 'Roboto-Light';
    src: url('../assets/styling/fonts/roboto/Roboto-Light.ttf');
}

@font-face {
    font-family: 'Roboto-Thin';
    src: url('../assets/styling/fonts/roboto/Roboto-Thin.ttf');
}

@font-face {
    font-family: 'Roboto-Regular';
    src: url('../assets/styling/fonts/roboto/Roboto-Regular.ttf');
}

@font-face {
    font-family: 'Roboto-Regular';
    src: url('../assets/styling/fonts/roboto/Roboto-Bold.ttf');
}

#countingquiz {
    padding-top: 90px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bowser{
  position: fixed;
  height: 6%;
  width: 6%;
  left: 87%;
}

body {
    background-image: url('../assets/styling/background2.png');
    width: 100%;
    background-size: cover;
    /* background-image: url('../styling/background1.png'); */
    background-repeat: repeat-y; 
    background-position: center top;
}

.score_col{
  margin-top: 10%;
}

.title{
  background-repeat: no-repeat;
  padding-bottom: 1.5rem;
}

.tryagain {
  background-color: #fbd000;
  /* margin-top: 1rem */
}

.score_card{
  background-color: rgb(7, 171, 236);
  backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    /* margin: 2rem; */
}

.nextquestion{
  background-color: #fbd000;
}

.nextquestion:hover{
  background-color:  #f7df69;
}

/* .app {
  display: flex;
  flex-direction:  column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
} */

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.head_card{
  background-color: rgb(4,156,216);
  /* font-size: 2rem bold; */
}

.card_body{
  background-color: rgb(7, 171, 236);
}
.question {
  color: black;
}

.explanation{
  display: block;
  cursor: pointer ;
  margin:2%;
  background-color: #FBD000;
  color: black;
}

.explanation_text{
  margin-right: 3%;
}

.explanation_mario{
  background-image: url('../assets/styling/mario.PNG');
  background-size: 80px;
  background-repeat: no-repeat;
  background-color: #FBD000;
  display: block;
  cursor: pointer ;
  margin:2%;
  margin:2%;
  color: black;
}

.score{
  position: absolute;
  margin-left: 10%;
  margin-right:1%;
  width: 100px;
  font-size: 15px;
  margin-top: 3.4rem;
  position: static;
}

.quiz {
  backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  /* padding: 1rem; */
  padding: 30px;
  width: 100%;
  max-width: 750px ;
  border-radius: 0.5rem;
  margin:auto;
}

.quiz-info {
   display: flex;
   justify-content: space-between;
   height: 80%;
}

.quiz-info .question {
  font-size: 1.5rem;
  text-align: left;
  padding-left: 5px;
  height:80%;
  margin-bottom: 20px;
  /* padding-top: 5px; */
}

.quiz-info .score {
  font-size: 0.75rem;
  text-align: center;
  font-weight: bold;
}

.nextbtn {
  padding-top: 15px;
}

.options{
  margin-bottom: 1rem ;
}

.option {
  /* background-color: rgb(110,192,207); */
  background-color: rgb(4,156,216);
  display: block;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer ;
}

.option:hover{
  /* background-color: rgb(126, 220, 238); */
  background-color: rgb(14, 172, 234);
}

.option.correct {
  /* background-color: #3deb94; */
  background-color: rgb(67, 176, 71);
}

.option.wrong {
  background-color: #e52521;
}

.option:last-of-type {
   margin-bottom: 0;
}

.option.disabled {
  opacity:  0.5;
}

.option input {
  display: none;
}

.button:focus.active {     
    background-color:rgb(0, 0, 0);    
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  margin: auto;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  font-weight: 100%;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 0.5rem;

}

button:disabled {
  opacity: 0.5 ;
}

h2{
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {

  font-size: 1.5rem;
  text-align: center;
}
</style>

