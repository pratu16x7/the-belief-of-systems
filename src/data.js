export default {
    "stages": {
        "intro": {
            "id": "intro",
            "description": "Presenting the evidence",
            "message": "Steve is a meek and tidy soul" // 
            // 
        },
        "prePrior": {
            "id": "prePrior",
            "description": "Existing empty world: empty un orged world or filled with two parts",
            "message": ""
        },
        "prior": {  // is also a belief, just as the later belief
            "id": "prior",
            "description": "Setting the Prior, divinding the word: Your world of farmers and librarians, or rel and non-rel docs, or cancer and non-cancer patients",
            "message": "Forget the info, what do you already know?"
        },
        "evidenceBeliefFormulation": {
            "id": "evidenceBeliefFormulation",
            "description": "Reframing the evidence and stating our off hand opnion now",
            "message": "So librarians is 4 times more likely"
        },
        "updateBasedOnEvidence": {
            "id": "updateBasedOnEvidence",
            "description": "Update your world",
            "message": "That how it would look in our current world"
        },
        "ourNewWorld": {
            "id": "ourNewWorld",
            "description": "Highlight",
            "message": "This is our new world"
        },
        "propertyGraphical": {
            "id": "propertyGraphical",
            "description": "show the formula graphically",
            "message": "And this is our value"
        },
        // "calculations": {
        //     // This is where custom values can go
        //     "id": "calculations",
        //     "description": "calculations",
        //     "message": "And this is our value"
        // }
    },

    // These are fixed templates, just with the color change, 
    // lvl2: and a message maybe to show relation with other props depending on the scenario
    "properties": {
        "bayesTheorem": {
            "id": "bayesTheorem"
        },
        "tpFp": {
            "id": "tpFp"
        },
        "precisionRecall": {
            "id": "precisionRecall"
        },
        // a fourth for IP?
    },

    "stagesOrdering": [],

    // TODO: mesaages should be dynamic based on scenario state values
    "scenarios": {
        "farmerAndLibrarian": {
            "id": "farmerAndLibrarian",
            "name": "farmerAndLibrarian",
            "property": "bayesTheorem",
            "background": ["person.jpg", "repeat"],
            "colors": [],
            "icon": "",
            "messages": {
                "intro": {
                    "message": "Steve is a meek and tidy soul" // 
                },
                "prePrior": {
                    "message": ""
                },
                "prior": {
                    "message": "Forget the info, what do you already know?"
                },
                "evidenceBeliefFormulation": {
                    "message": "So librarians is 4 times more likely"
                },
                "updateBasedOnEvidence": {
                    "message": "That how it would look in our current world"
                },
                "ourNewWorld": {
                    "message": "This is our new world"
                },
                "propertyGraphical": {
                    "message": "And this is our value"
                },
                // "calculations": {
                //     "message": "And this is our value"
                // }
            }
        },
        "medicalTest": {
            "id": "medicalTest",
            "name": "medicalTest",
            "property": "tpFp",
            "background": ["woman.jpg", "repeat"],
            "colors": [],
            "icon": "",
            "messages": {
                "1": {
                    "": ""
                }
            }
        },
        "informationRetrieval": {
            "id": "informationRetrieval",
            "name": "informationRetrieval",
            "property": "precisionRecall",
            "background": ["doc.jpg", "repeat"],
            "colors": [],
            "icon": "",
            "messages": {
                "1": {
                    "": ""
                }
            }
        },
        "objectDetection": {
            "id": "objectDetection",
            "name": "objectDetection",
            "property": "precisionRecall",
            "background": ["cat.jpg", "full"],
            "colors": [],
            "icon": "",
            "messages": {
                "1": {
                    "": ""
                }
            }
        },
    }
};
