<template>
  <div class="main-page">
    <h1>The Belief of Systems</h1>
    <p>Ways to measure the Belief of the things that can have one, including ourselves :) (Many thanks to 3b1b)</p>

    <p>Advanced: Try setting the prior percent yourself! <input v-model="priorval"> </p>

    <section class="scenario-toggles flex">
      <scenario-toggle
        v-for="item in scenarios"
        v-bind:key="item.id"
        v-bind:scenarioName="item.name"
        v-bind:scenarioId="item.id"
        v-bind:icon="item.icon"
        v-bind:active="scenarios[item.id]['active']"
        v-on:click="activateScenario(item.id)"
      ></scenario-toggle>
    </section>
    
    <scenario
      v-for="item in scenarios"
      v-bind:key="item.id"
      v-bind:id="item.id"
      v-bind:name="item.name"
      v-bind:property="item.property"
      v-bind:background="item.background"
      v-bind:colors="item.colors"
      v-bind:messages="item.messages"
      v-bind:stages_meta="stages"
      v-bind:active="scenarios[item.id]['active']"

      v-bind:priorval="priorval"
    ></scenario>
  </div>
  
  <!-- <scraps>woo</scraps> -->
</template>

<script>
// import Scraps from './components/Scraps.vue';
import Scenario from './components/Scenario.vue';
import ScenarioToggle from './components/ScenarioToggle.vue';

// Use props for every scenario component: 
// https://v3.vuejs.org/guide/component-props.html#prop-types
// From this data 
import data from './data';

  export default {
    components: { Scenario, ScenarioToggle },
    data() {
        return {
            name: "The Belief of Systems",
            
            scenarios: data['scenarios'],
            stages: data['stages'],
            priorval: 17
        };
    },
    metadata: data,
    mounted() {
        Object.keys(this.scenarios).map(key => {
            this.scenarios[key]['active'] = false
        });
        this.activateScenario("farmerORLibrarian")
        // this.$refs.fileInput.click()
    },
    methods: {
        activateScenario(scenarioId) {
            Object.keys(this.scenarios).map(key => {
                this.scenarios[key]['active'] = false
            });
            this.scenarios[scenarioId]['active'] = true
        }
    }
  };
</script>

<style lang="css" scoped>
.main-page {
  width: 1080px;
  height: 720px;
  margin: 1em auto;

  display: flex;
  flex-direction: column;
}
.scenario-toggles {
    /* margin: 0 100px; */
    gap: 0px 15px;
}
</style>

<style lang="css">
body {
  background-color: rgb(46, 53, 64);
  color: #fff;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.numerator {
    border-bottom: 1px solid white;
    margin: 0px 10px;
    padding-bottom: 10px;
}

.property {
  padding-bottom: 1em;
  border-bottom: 1px solid gray;
}

.denominator{
    padding-top: 1em;
    margin: auto;
}


.flex {
  display: flex;
}

.flex-v {
  display: flex;
  flex-direction: column;
}

.flex-1 {
  flex: 1
}

.flex-2 {
  flex: 2
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>

