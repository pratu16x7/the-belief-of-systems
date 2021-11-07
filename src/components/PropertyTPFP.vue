<template>
    <div class="flex border property" >
        <div class="flex flex-2 flex-center"><p>P (Librarian / Evidence) = </p>
        </div>
        <div class="flex-v flex-1">
            <div class="numerator">
                <world-set :size="50" :showOnly="['worldTrueFit']"></world-set>
            </div>
            <div><world-set :size="50" :showOnly="['worldTrueFit', 'worldFalseFit']"></world-set></div>
        </div>
    </div>

</template>

<script>

import WorldSet from './WorldSet.vue';
export default {
    components: { WorldSet }
}
</script>

<style scoped>
.numerator {
    border-bottom: 1px solid white;
    margin: 0px 10px;
    padding-bottom: 10px;
}

.property {
  padding-bottom: 1em;
  border-bottom: 1px solid gray;
}
</style>


