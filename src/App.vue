<template>
  <div class="main-page">{{ name }}
    <section>
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

</style>

