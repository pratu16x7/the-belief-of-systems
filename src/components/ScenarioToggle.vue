<template>
    <div class="scenario-toggle flex-1 flex-center" :class="{active: active}"> <p>{{ scenarioName }}</p> </div>
</template>

<script>

export default {
    props: {
        scenarioName: String,
        scenarioId: String,
        icon: String,
        active: Boolean,
    }
}
</script>

<style scoped>
.scenario-toggle {
  height: 3em;
  width:100px;

  background-color: rgb(35, 44, 57);
  border: 1px solid gray;
  border-radius: 1em;
}

.scenario-toggle.active {
  background-color: gray;
}
</style>