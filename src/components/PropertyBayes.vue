<template>
    <div>
        <world-set :size="100" :showOnly="['worldTrueFit', 'worldFalseFit']"></world-set>
    </div>
</template>

<script>

import WorldSet from './WorldSet.vue';
export default {
    components: { WorldSet }
}
</script>
