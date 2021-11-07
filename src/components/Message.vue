<template>
    <p  v-show="active" class="message">{{message}}</p>
</template>

<script>

export default {
    props: {
        message: String,
        scenarioId: String,
        active: Boolean,
    }
}
</script>

<style scoped>

</style>