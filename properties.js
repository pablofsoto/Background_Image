define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings",
        items: {
            landingpage: {
                type: "items",
                label: "Background Info",
                ref: "BackgroundInfo",
                items: {
                    background_url: {
                        ref: "background.imgurl",
                        label: "IMG URL",
                        type: "string",
                        expression: "optional",
                        defaultValue: "'http://4.bp.blogspot.com/-mHaluG7qA28/UCrZcw03t2I/AAAAAAAAEI0/bhccobL7vmM/s640/LANDSCAPE-BEIRA-MAR-1.jpg'"
                    },
                     background_transparency: {
                         ref: "background.transparency",
                         label: "Transparency",
                         type: "string",
                         expression: "optional",
                         defaultValue: 0.7
                     }
                    //  background_color: {
                    //      ref: "background.color",
                    //      label: "Background Hex Color",
                    //      type: "string",
                    //      expression: "optional",
                    //      defaultValue: "#FFFFFF"
                    //  } 
                }
            }
        }
    };
    // *****************************************************************************
    // Main properties panel definition
    // Only what is defined here is returned from properties.js
    // *****************************************************************************
    return {

        type: "items",
        component: "accordion",
        items: {
            Settings: appearanceSection,
            addons: {
                uses: "addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling"
                    }
                }
            },

        }
    }
});
