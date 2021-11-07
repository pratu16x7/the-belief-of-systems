<template>
    <div class="border property">
        <div class="flex  " >
            <div class="flex flex-2 flex-center"><p>Precision = </p>
            </div>
            <div class="flex-v flex-1">
                <div class="numerator">
                    <world-set :size="50" v-bind:true_percent="true_percent" :showOnly="['worldTrueFit']"></world-set>
                </div>
                <div><world-set :size="50" v-bind:true_percent="true_percent" :showOnly="['worldTrueFit', 'worldFalseFit']"></world-set></div>
            </div>
        </div>
        <div class="flex " >
            <div class="flex flex-2 flex-center"><p>Recall = </p>
            </div>
            <div class="flex-v flex-1">
                <div class="numerator">
                    <world-set :size="50" v-bind:true_percent="true_percent" :showOnly="['worldTrueFit']"></world-set>
                </div>
                <div class="denominator"><world-set :size="50" v-bind:true_percent="true_percent" :showOnly="['worldTrueFit', 'worldTrueNotFit']"></world-set></div>
            </div>
        </div>
    </div>

</template>

<script>

import WorldSet from './WorldSet.vue';
export default {
    components: { WorldSet },
    props: {
        true_percent: Number
    }
}
</script>

<style scoped>
</style>


