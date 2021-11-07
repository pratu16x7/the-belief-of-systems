<template>
  <div class="main-page">
    <section class="scenario-toggles">
      <scenario-toggle> </scenario-toggle>
    </section>
    
    <scenario></scenario>
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
        console.log(data);
        return {
            name: "The Belief of Systems",
        };
      },
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
  height: 3em;

  background-color: rgb(35, 44, 57);
  border: 1px solid gray;
  border-radius: 1em;
}
</style>

<style lang="css">
body {
  background-color: rgb(46, 53, 64);
}
</style>

