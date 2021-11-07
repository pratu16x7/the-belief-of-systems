<template>
    <div v-show="active" class="world-set" :class="id" :style="{height: size + 'px', width: size + 'px'}"  ref="worldMap">
        <div v-if="stage=='world-prior'" class="world-prior" ref="worldPrior">
            <div class="world-true" ref="worldTrue" :style="{height: size + 'px', width: true_percent + '%'}"></div>
            <div class="world-false" ref="worldFalse" :style="{height: size + 'px', width: (100 - true_percent - reduce_percent) + '%'}"></div>
        </div>

        <div v-if="stage=='world-update-based-on-evidence'" class="world-update-based-on-evidence">
            <div class="world-true-2" ref="worldTrue2" :style="{height: size + 'px', width: true_percent + '%'}">

                <div class="world-true-not-fit" ref="worldTrueNotFit" :style="{height: (100 - true_fit_percent - reduce_percent) + '%'}"></div>
                <div class="world-true-fit" ref="worldTrueFit" :style="{height: true_fit_percent + '%'}"></div>
            </div>
            <div class="world-false-2" ref="worldFalse2" :style="{height: size + 'px', width: (100 - true_percent - reduce_percent) + '%'}">

                <div class="world-false-not-fit" ref="worldFalseNotFit" :style="{height: (100 - false_fit_percent - reduce_percent) + '%'}"></div>
                <div class="world-false-fit" ref="worldFalseFit" :style="{height: false_fit_percent + '%'}"></div>
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
    props: {
        id: String,
        size: {
            type: Number,
            default: 200
        },
        true_percent: {
            type: Number,
            default: 17
        },
        true_fit_percent: {
            type: Number,
            default: 55
        },
        false_fit_percent: {
            type: Number,
            default: 20
        },
        showOnly: {
            type: Array,
            default() {
                return []
            }
        },
        showLayer: {
            type: String,
            default: ""
        },
        active: {
            "type": Boolean,
            "default": true
        },
        background: Array,
    },
    data() {
        return {
            stage: "world-update-based-on-evidence",
            // stage: "world-prior",
            // true_percent: 10,  // 50:4, 100:2, 200:1

            reduce_percent: this.size < window.BASE_SIZE ? Math.ceil(window.BASE_SIZE/this.size) : 1,  // due to border
            // true_fit_percent: 40,
            // false_fit_percent: 10 
        };
    },

    mounted() {
        let allELems = [
            "worldTrueNotFit",
            "worldTrueFit",
            "worldFalseFit",
            "worldFalseNotFit"
        ];
        // this.$refs['worldFalseFit'].style.visibility = "hidden";
        if (this.showOnly.length > 0) {
            allELems.map(elem => {
                if (!this.showOnly.includes(elem)) {
                    this.$refs[elem].style.visibility = "hidden";
                }
            })
        }
        if (this.showLayer) {
            if (this.showLayer == "worldMap") {
                this.stage = "";
                this.$refs['worldMap'].style.background = "blue";
            }
            if (this.showLayer == "worldPrior") {
                this.stage = "world-prior";
            }
            // if (this.showLayer == "worldEvidence") {

            // }
            if (this.showLayer == "None") {
                this.$refs['worldMap'].style.visibility = "hidden";
            }
        } 

        let img_map = {
            'doc.png': "https://gcdn.pbrd.co/images/0tt349TRgnsx.png?o=1",
            'person.jpg': "https://gcdn.pbrd.co/images/JvtlL2cXxmq5.jpg?o=1",
            'stormtrooper.png': "https://gcdn.pbrd.co/images/uTsgteayt9Cj.png?o=1"
        }

        console.log('last', this.id, this.background);
        if (this.background && this.background.length > 0) {
            this.$refs['worldMap'].style.background = `url(${img_map[this.background[0]]})`;
            this.$refs['worldMap'].style.opacity = "0.6";
            if(this.background[1] == "cover") {
                this.$refs['worldMap'].style.backgroundSize = 'cover';
            }
        }
    },
}
</script>

<style lang="css" scoped>
.world-set {
    margin: auto;
    border-radius: 0.5em;
    /* background-color: green; */
}

/* background-image: url("");
background-size: contain;
background-position-y: bottom; */

.world-prior {
    opacity: 0.85;
}

.world-update-based-on-evidence {
    opacity: 0.85;
}

.property .world-prior {
    opacity: 1;
}

.property .world-update-based-on-evidence {
    opacity: 1;
}

.world-true {
    background-color: #888888;
    width: 10%;
    display: inline-block;

    border: 0.5px solid white;
    border-radius: 0.5em 0 0 0.5em;
}

.world-true-2 {
    /* background-color: #888888; */
    width: 10%;
    display: inline-block;

    /* border: 0.5px solid white; */
    /* border-radius: 0.5em 0 0 0.5em; */
}


.world-false {
    background-color: #434343;
    display: inline-block;

    border: 0.5px solid white;
    border-radius: 0 0.5em 0.5em 0;
}

.world-false-2 {
    /* background-color: #434343; */
    display: inline-block;

    /* border: 0.5px solid white; */
    /* border-radius: 0 0.5em 0.5em 0; */
}

.world-true-not-fit {
    width: 100%;
    /* height: 59%; */
    background-color: #888888;

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
    background-color: #434343;

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