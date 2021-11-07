<template>
    <div v-show="active" class="scenario">
        <!-- {{messages}} -->
        <section class="explainer">

            <!-- v-bind:size="item.size" -->
            <world-set
                v-for="item in stages"
                v-bind:key="id + '_' + item.id"
                v-bind:id="item.id"
                v-bind:showOnly="item.showOnly"
                v-bind:showLayer="item.activate"
                v-bind:active="item.active"
            ></world-set>

            <!-- <p class="message message-intro"
                v-for="item in stages"
            ></p> -->

        </section>

        <section class="properties">
            <property-bayes></property-bayes>
            <property-bayes></property-bayes>
            <property-bayes></property-bayes>
            <property-bayes></property-bayes>
        </section>
    </div>
</template>

<script>

import WorldSet from './WorldSet.vue';
import PropertyBayes from './PropertyBayes.vue';

export default {
    components: { WorldSet, PropertyBayes },
    props: {
        id: String,
        name: String,
        property: String,
        background: Array,
        colors: Array,
        messages: Object,
        active: Boolean,
        stages_meta: Object
    },
    data() {
        return {
            // stages: getStages(this.stages_meta, this.messages)
            stages: {}
        }
    },
    mounted() {
        Object.keys(this.stages_meta).map(key => {
            this.stages[key] = this.stages_meta[key]
            this.stages[key]['message'] = this.messages[key]["message"]
        });
    },
    // methods: {
    //     getStages(stages_meta, messages) {
    //         stages = {}
    //         Object.keys(this.stages_meta).map(key => {
    //             this.stages[key]['active'] = 0
    //         });
    //         this.scenarios[scenarioId]['active'] = 1
    //         return 
    //     }
    // }

    methods: {
        updateStage(stage_info) {
            return stage_info
        }
    }
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