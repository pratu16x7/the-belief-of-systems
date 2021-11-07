<template>
    <div v-show="active" class="scenario">
        <!-- {{messages}} -->
        <section class="explainer flex-v flex-center">

            <!-- v-bind:size="item.size" -->
            <div class="worldsets">
                <world-set
                    v-for="item in stages"
                    v-bind:key="id + '_' + item.id"
                    v-bind:id="item.id"
                    v-bind:showOnly="item.showOnly"
                    v-bind:showLayer="item.activate"
                    v-bind:background="background"
                    v-bind:active="item.active"
                ></world-set>
            </div>
            
            <div class="messages">
                <message
                    v-for="item in stages"
                    v-bind:key="id + '_' + item.id"
                    v-bind:id="item.id"
                    v-bind:message="item.message"
                    v-bind:active="item.active"
                ></message>
            </div>


            <button v-on:click="activateNextStage">Next</button>
        </section>

        <section class="properties">
            <property-bayes ref="bayesTheorem"></property-bayes>
            <property-t ref="tpfp"></property-t>
            <property-precision-recall ref="precisionRecall"></property-precision-recall>
        </section>
    </div>
</template>

<script>

import WorldSet from './WorldSet.vue';
import Message from './Message.vue';
import PropertyBayes from './PropertyBayes.vue';
import PropertyT from './PropertyT.vue';
import PropertyPrecisionRecall from './PropertyPrecisionRecall.vue';

export default {
    components: { WorldSet, PropertyBayes, Message, PropertyT, PropertyPrecisionRecall },
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
            stages: {},
            activeStageId: "",
            reveal: false
        }
    },
    mounted() {
        console.log('start', this.name, this.background)
        Object.keys(this.stages_meta).map(key => {
            this.stages[key] = {}
            Object.assign(this.stages[key], this.stages_meta[key]);
            this.stages[key]['message'] = this.messages[key]["message"]
            this.stages[key]['active'] = false
        });
        this.activeStageId = Object.keys(this.stages)[0]
        this.stages[this.activeStageId]['active'] = true

    },
    methods: {
        activateNextStage() {
            this.stages[this.activeStageId]['active'] = false
            let stage_ids = Object.keys(this.stages)
            let index = stage_ids.indexOf(this.activeStageId)
            if (index < stage_ids.length - 1) {
                this.activeStageId = stage_ids[index + 1] 
            }
            else {
                this.activeStageId = stage_ids[0]
            }

            this.stages[this.activeStageId]['active'] = true

            // current_index = 0;
            
            // Object.keys(this.stages).map((key, index) => {
            //     this.stages[key] = this.stages_meta[key]
            //     this.stages[key]['message'] = this.messages[key]["message"]
            // }); 
            // next_index = 
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