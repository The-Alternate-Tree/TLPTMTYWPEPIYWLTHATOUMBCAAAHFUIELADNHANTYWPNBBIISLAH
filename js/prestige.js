addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        time: new Decimal(0),
    }},
    color: "#13dcdc",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)


        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)


        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
     tabFormat: {
          
            "Upgrades": {
                
                content:
                
                    [   ['infobox', 'l1'], "main-display",

                    "prestige-button", "resource-display",
                    ["blank", "5px"], // Height
                    
                   "upgrades"],

            },
        },
        infoboxes:{
            "l1": {
                title: "First Layer Information",
                body: "Hi! Welcome to TLPTMTYWPEPIYWLTHATOUMBCAAAHFUIELADNHANTYWPNBBIISLAH, AKA, The Longest Prestige Tree Mod That You Will Probably Ever Play In Your Whole Life That Has A Ton Of Upgrades, Milestones, Buyables, Challenges, And Achievements And Has Fifty Upgrades In Each Layer And Does Not Have Anything New That You Will Probably Never Beat Because It Is So Long And Hard. But you can call it, 'The Longest Prestige Tree Mod'.<br><br> This game does indeed have 50 upgrades and 10 rows per layer and a ton of upgrades, buyables, milestones, challenges, and achievements. This game is not for mobile users, as you have to scroll like 20 rows of upgrades to get to row 10. Each layer will also take significantly longer to unlock than the previous one. I am deeply sorry if you loose your save halfway through the game too.",
            },
        },
         upgrades: {

            11: {
                title: "U1 - Start",
                description: "Double your point gain.",
                cost: new Decimal(1),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                
            },
            12: {
                title: "U2 - Prestige Based",
                description: "Boost point gain based on prestige points, caps at 1,000x.",
                cost: new Decimal(3),
                unlocked() { return hasUpgrade('p', 11) }, // The upgrade is only visible when this is true
                effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                    let ret = player.p.points.add(1).pow(0.45)
                    if (ret.gte("1000")) ret = '1000'
                    return ret;
                },
                effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
            },
        },
})
