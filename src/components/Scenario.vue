<template>
    <section class="explainer">
    <world-set></world-set>
        <p class="message message-intro"></p>
    </section>

    <section class="properties">
        <property-bayes></property-bayes>
    </section>
</template>

<script>

import WorldSet from './WorldSet.vue';
import PropertyBayes from './PropertyBayes.vue';

export default {
    components: { WorldSet, PropertyBayes }
}
</script>