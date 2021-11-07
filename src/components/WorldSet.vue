<template>
    <div class="world-set" :style="{height: size + 'px', width: size + 'px'}">
        <div v-if="stage=='world-prior'" class="world-prior">
            <div class="world-true" :style="{height: size + 'px', width: true_percent + '%'}"></div>
            <div class="world-false" :style="{height: size + 'px', width: (100 - true_percent - reduce_percent) + '%'}"></div>
        </div>

        <div v-if="stage=='world-update-based-on-evidence'" class="world-update-based-on-evidence">
            <div class="world-true" :style="{height: size + 'px', width: true_percent + '%'}">
                
                <div class="world-true-not-fit" :style="{height: (100 - true_fit_percent - reduce_percent) + '%'}"></div>
                <div class="world-true-fit" :style="{height: true_fit_percent + '%'}"></div>
            </div>
            <div class="world-false" :style="{height: size + 'px', width: (100 - true_percent - reduce_percent) + '%'}">

                <div class="world-false-not-fit" :style="{height: (100 - false_fit_percent - reduce_percent) + '%'}"></div>
                <div class="world-false-fit" :style="{height: false_fit_percent + '%'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
window.BASE_SIZE = 200;  // bad but created() not working

export default {
    created() {
        this.BASE_SIZE = 200;  // Not working
    },
    props: ['size'],
    data() {
        return {
            stage: "world-update-based-on-evidence",
            // stage: "world-prior",
            true_percent: 10,  // 50:4, 100:2, 200:1

            reduce_percent: this.size < window.BASE_SIZE ? Math.ceil(window.BASE_SIZE/this.size) : 1,  // due to border
            true_fit_percent: 40,
            false_fit_percent: 10 
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
    display: inline-block;

    border: 0.5px solid white;
    border-radius: 0 0.5em 0.5em 0;
}

.world-true-not-fit {
    width: 100%;
    /* height: 59%; */

    border: 0.5px solid white;
    border-radius: 0.5em 0 0 0;
}
.world-true-fit {
    width: 100%;
    /* height: 40%; */
    background-color: #63C2DC;

    border: 0.5px solid white;
    border-radius: 0 0 0 0.5em;
}
.world-false-not-fit {
    width: 100%;
    /* height: 89%; */

    border: 0.5px solid white;
    border-radius: 0 0.5em 0 0;
}
.world-false-fit {
    width: 100%;
    /* height: 10%; */
    background-color: #28758A;

    border: 0.5px solid white;
    border-radius: 0 0 0.5em 0;
}


</style>