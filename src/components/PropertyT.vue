<template>
    <div class="flex border property" >
        <div class="flex flex-2 flex-center"><p>P (Covid | +ve Test) = </p>
        </div>
        <div class="flex-v flex-1">
            <div class="numerator">
                <world-set :size="50" v-bind:true_percent="true_percent" :showOnly="['worldTrueFit']"></world-set>
            </div>
            <div><world-set :size="50" v-bind:true_percent="true_percent" :showOnly="['worldTrueFit', 'worldFalseFit']"></world-set></div>
        </div>
        <div class="flex flex-center">
            <p>=</p>
        </div>
        <div class="flex-v flex-1">
            <div class="numerator flex flex-center" >
                <p>TP</p>
            </div>
            <div class="denominator"><span>TP + FP</span></div>
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


