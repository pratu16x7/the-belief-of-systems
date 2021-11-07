<template>
    <div class="world-set" :style="{height: size + 'px', width: size + 'px'}">
        <div v-if="stage=='world-prior'" class="world-prior">
            <div class="world-true" :style="{height: size + 'px'}"></div>
            <div class="world-false" :style="{height: size + 'px'}"></div>
        </div>

        <div v-if="stage=='world-update-based-on-evidence'" class="world-update-based-on-evidence">
            <div class="world-true" :style="{height: size + 'px'}">
                <div class="world-true-not-fit"></div>
                <div class="world-true-fit"></div>
            </div>
            <div class="world-false" :style="{height: size + 'px'}">
                <div class="world-false-not-fit"></div>
                <div class="world-false-fit"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            stage: "world-update-based-on-evidence",
            size: 300
        };
    },
}
</script>

<style lang="css" scoped>
.world-set {
    margin: auto;
}

.world-true {
    background-color: #888888;
    width: 10%;
    display: inline-block;

    border: 0.5px solid white;
    border-radius: 0.5em 0 0 0.5em;
}

.world-false {
    background-color: #434343;
    width: 89%;
    display: inline-block;

    border: 0.5px solid white;
    border-radius: 0 0.5em 0.5em 0;
}

.world-true-not-fit {
    width: 100%;
    height: 59%;

    border: 0.5px solid white;
    border-radius: 0.5em 0 0 0;
}
.world-true-fit {
    width: 100%;
    height: 40%;
    background-color: #63C2DC;

    border: 0.5px solid white;
    border-radius: 0 0 0 0.5em;
}
.world-false-not-fit {
    width: 100%;
    height: 89%;

    border: 0.5px solid white;
    border-radius: 0 0.5em 0 0;
}
.world-false-fit {
    width: 100%;
    height: 10%;
    background-color: #28758A;

    border: 0.5px solid white;
    border-radius: 0 0 0.5em 0;
}


</style>