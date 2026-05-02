addLayer("a", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#eeff00",
    resource: "achievements", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
   
    row: 'side', // Row the layer is in on the tree (0 is the first row)
    
    layerShown(){return true},
     tabFormat: {
          
            "Achievements": {
                
                content:
                
                    [  "main-display",

                    ["blank", "5px"], // Height
                    
                   "achievements"],

            },
        },
       
        achievements: {
        11: {
        name: "First Upgrade",
        done() {return hasUpgrade('p', 11)}, // This one is a freebie
tooltip: "Get the first upgrade",  
            onComplete() {player.a.points = player.a.points.add(1)},

        },
         12: {
        name: "Formula Upgrade",
        done() {return hasUpgrade('p', 12)}, // This one is a freebie
tooltip: "Get the second upgrade",  
            onComplete() {player.a.points = player.a.points.add(1)},

        },
    },
})
