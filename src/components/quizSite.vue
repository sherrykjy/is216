<script>
    // import { QuerySnapshot } from '@firebase/firestore'
    import { ref } from 'vue'
    import { db } from '../../firebase/index.js'

    import { collection, getDocs } from 'firebase/firestore';

    // onMounted(async () => {
    //     const querySnapshot = await getDocs(collection(db, "complexity"));
    //     let counting_bank = []
    //     querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots;
    //         const questions = {
    //             id: doc.id,
    //             question_id: doc.data().id,
    //             question: doc.data().question,
    //             answer: doc.data().answer,
    //             explanation: doc.data().explanation,
    //             option: doc.data().option,
    //             selected: doc.data().selected
    //         }
    //         counting_bank.push(questions)
    //         })
    //     questions.value = counting_bank
    // })
    import fireBase from '../../firebase/index.js'
    
    

export default{
    name: "quizSite",
    data() {
        return {
            questions: ref([{}]),
            // countingBank: [],
            quizCompleted:  ref(false),
            currentQuestion: ref(0),
            currentExplanation: ref(0),
        
        }
    },
    created() {
      this.questions = getDocs(collection(db,'complexity'))
      console.log(this.questions)
    },
    // firestore() {
    //   return {
    //     questions: db.collection('complexity')
    //   }
    // },
    // created() {
    //   db.collections('complexity').get().then((QuerySnapshot) => {
    //    QuerySnapshot.forEach((doc) => {
    //     this.questions = doc.data
    //    }) 
    //   })
    // },
    methods: {
        NextQuestion() {
            if (this.currentQuestion.value < this.questions.value.length - 1){
                this.currentQuestion.value++ 
                this.currentExplanation.value++ 
            } else {
                this.quizCompleted.value = true;
            }
        },
        setAnswer: function(evt) {
            this.questions.value[this.currentQuestion.value].selected = evt.target.value
            evt.target.value = null  
        }
    },
    computed: {
        score() {
                let value = 0
                this.questions.value.map(q => {
                    if (q.selected == q.answer) {
                    console.log("this is selected", q.selected)
                    value++
                    }
                })
            return value;
        },
        getCurrentQuestion() {
            let question = this.questions.value[this.currentQuestion.value]
            question.index = this.currentQuestion.value

            return question 
        },
        getCurrentExplanation() {
            let explanation = this.questions.value[this.currentExplanation.value]
            explanation.index = this.currentExplanation.value
            return explanation
        },
        
    }
}
</script>

<template>

      <h1 class = "quiz_header">The Quiz</h1> 

      <section class="quiz" v-if = "!quizCompleted">
        <div class="quiz-info">
          <span class="question">{{ getCurrentQuestion.question }}</span>
          <span class="score"> Score {{ score }} / {{ questions.length }}</span>
        </div>

        <div class="options">
          <label 
            v-for="(option, index) in getCurrentQuestion.option" 
            :key = "index" 
            :class = "`option ${
              getCurrentQuestion.selected == index
                ? index == getCurrentQuestion.answer
                  ? 'correct'
                    : 'wrong'
                : ''

          } ${
            getCurrentQuestion.selected != null && index != getCurrentQuestion.selected
              ? 'disabled'
              : ''

          }`">
            <input 
              type="radio" 
              :name = "getCurrentQuestion.index" 
              :value = "index" 
              v-model="getCurrentQuestion.selected" 
              :disabled = "getCurrentQuestion.selected"
              @change = "setAnswer">
              <span>{{option}}</span>
              
          </label>
        </div>

        <button 
        @click = "NextQuestion" 
        :disabled = "!getCurrentQuestion.selected">
        {{
          getCurrentQuestion.index == questions.length - 1
            ? 'Finish'
            : getCurrentQuestion.selected == null
              ? 'Select an option'
              : 'Next Question '

        }}
        </button>

        <div class = "explanation" v-if= "getCurrentQuestion.selected != index">
          <span class="explanation">{{ getCurrentExplanation.explanation }}</span>
        </div>
      </section>

      <section v-else>
        <h2>You have finish the quiz!</h2>
        <p>Your score is {{ score }} / {{questions.length}}</p>
      </section>
    

</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: skyblue;
  color: antiquewhite;
}

.app {
  display: flex;
  flex-direction:  column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz_header { 
  color: black
}

.explanation{
  right: 50%;
  margin:2%;
  background-color: #2cce7d;
  color: #2d213f;
  width: 100%;
  max-width: 640px ;
  border-radius: 0.5rem;
  
}

.quiz {
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px ;
  border-radius: 0.5rem;
}

.quiz-info {
   display: flex;
   justify-content: space-between;
   margin-bottom: 1rem;
}

.quiz-info .question {
  color: #8f8f8f; 
  font-size: 1.25rem;
}

.quiz-info .score {
  color: #FFF;
  font-size: 1.25rem;
}

.options{
  margin-bottom: 1rem ;
}

.option {
  display: block;
  padding: 1rem;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer ;
}

.option:hover{
   background-color: #2d213f;
}

.option.correct {
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
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

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;

  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f; 
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;

}

button:disabled {
  opacity: 0.5 ;
}

h2{
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
</style>

