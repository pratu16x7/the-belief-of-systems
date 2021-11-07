export default {
    "stages": {
        "intro": {
            "id": "intro",
            "description": "Presenting the evidence",
            "message": "Steve is a meek and tidy soul",
            "activate": "None"
            // 
        },
        "prePrior": {
            "id": "prePrior",
            "description": "Existing empty world: empty un orged world or filled with two activate",
            "message": "",
            "activate": "worldMap"
        },
        "prior": {  // is also a belief, just as the later belief
            "id": "prior",
            "description": "Setting the Prior, divinding the word: Your world of farmers and librarians, or rel and non-rel docs, or cancer and non-cancer patients",
            "message": "Forget the info, what do you already know?",
            "activate": "worldPrior"
        },
        "evidenceBeliefFormulation": {
            "id": "evidenceBeliefFormulation",
            "description": "Reframing the evidence and stating our off hand opnion now",
            "message": "So librarians is 4 times more likely",
            "activate": "None"
        },
        "updateBasedOnEvidence": {
            "id": "updateBasedOnEvidence",
            "description": "Update your world",
            "message": "That how it would look in our current world",
            "activate": "worldEvidence"
        },
        "ourNewWorld": {
            "id": "ourNewWorld",
            "description": "Highlight",
            "message": "This is our new world",
            // "activate": "None",
            "showOnly": ["worldTrueFit", "worldFalseFit"],
        },
        "propertyGraphical": {
            "id": "propertyGraphical",
            "description": "show the formula graphically",
            "message": "And this is our value",
            "activate": "None"
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
        "farmerORLibrarian": {
            "id": "farmerORLibrarian",
            "name": "farmerORLibrarian",
            "property": "bayesTheorem",
            "background": ["person.jpg", "repeat"],
            "colors": [],
            "icon": "",
            "messages": {
                "intro": {
                    "message": '"Steve is a meek and tidy soul". What would you think is more likely, that Steve is a farmer or a librarian?' // 
                },
                "prePrior": {
                    "message": "Let's say this is your entire population of librarians and farmers"
                },
                "prior": {
                    "message": "Forget the info, what do we already know? We know that farmers are more numerous than librarians"
                },
                "evidenceBeliefFormulation": {
                    "message": "Let's say librarians are 4 times more likely to fit the evidence"
                },
                "updateBasedOnEvidence": {
                    "message": "That is how it would look in our sample population"
                },
                "ourNewWorld": {
                    "message": "This is our new world, our belief, and we only need to divide number of librarians who fit by the total people who fit the description."
                },
                "propertyGraphical": {
                    "message": "And thus we have the value of P( Libarian | Evidence ) :)"
                },
                // "calculations": {
                //     "message": "And this is our value"
                // }
            }
        },
        "medicalTest": {
            "id": "medicalTest",
            "name": "medicalTest",
            "property": "tpfp",
            "background": ["person.jpg", "repeat"],
            "colors": [],
            "icon": "",
            "messages": {
                "intro": {
                    "message": "Let's say a person tested negative for Covid-19. What is more likely, that they don't have Covid or they do?" // 
                },
                "prePrior": {
                    "message": "Well, what do we know already?"
                },
                "prior": {
                    "message": "We know that Covid patients are more numerous that those who don't have it"
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
        "informationRetrieval": {
            "id": "informationRetrieval",
            "name": "Information Retrieval",
            "property": "precisionRecall",
            "background": ["doc.png", "repeat"],
            "colors": [],
            "icon": "",
            "messages": {
                "intro": {
                    "message": "Let's say your search system has brought you documents that it thinks are relevant to your query. What is more likely, that they're relevant or not?" // 
                },
                "prePrior": {
                    "message": ""
                },
                "prior": {
                    "message": "Forget the info, what do you already know?"
                },
                "evidenceBeliefFormulation": {
                    "message": "So  is 4 times more likely"
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
        "objectDetection": {
            "id": "objectDetection",
            "name": "objectDetection",
            "property": "precisionRecall",
            "background": ["stormtrooper.png", "cover"],
            "colors": [],
            "icon": "",
            "messages": {
                "intro": {
                    "message": "Let's say you make an Object Detection System and this is how it capture the object in an image? What is it's precision?" // 
                },
                "prePrior": {
                    "message": ""
                },
                "prior": {
                    "message": "Forget the info, what do you already know?"
                },
                "evidenceBeliefFormulation": {
                    "message": "So is 4 times more likely"
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
    }
};
