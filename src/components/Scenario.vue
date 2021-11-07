<template>
    <div class="scenario">
        <section class="explainer">
            <world-set :size="50"></world-set>
            <p class="message message-intro"></p>
        </section>

        <section class="properties">
            <property-bayes></property-bayes>
        </section>
    </div>
</template>

<script>

import WorldSet from './WorldSet.vue';
import PropertyBayes from './PropertyBayes.vue';

export default {
    components: { WorldSet, PropertyBayes }
}
</script>

<style scoped>
.scenario {
    flex: 1;
    display: flex;
    height: 100%;

    margin-top: 1em;
    position: relative;

    background-color: rgb(35, 44, 57);
    background-color: rgb(25, 29, 34);
    border: 1px solid gray;
    border-radius: 1em;
}
.explainer { 
    flex: 2;
    border-right: 1px solid white;
}
.properties { 
    flex: 1;
    /* border: 1px solid white; */
}
</style>