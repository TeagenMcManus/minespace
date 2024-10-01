/*Querey Selectors*/
const body = document.querySelector("body");

/*Opening Sequence*/
const osb = document.querySelector("#osb");

/*Player Stats*/
const dstats = document.querySelector("#stats");

/*All Types of Text*/
const th = document.querySelector("#text_header");

/*Player Stats Text*/
const xpText = document.querySelector("#xpText");
const goldText = document.querySelector("#goldText");
const text = document.querySelector("#text");
const txtb = document.querySelector("#txtb");
const coText = document.querySelector("#coText");
const stText = document.querySelector("#stText");
const irText = document.querySelector("#irText");
const brText = document.querySelector("#brText");
const MSt = document.querySelector("#mining");


/*Buttons*/
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

/*Mining Buttons*/
const MB = document.querySelector("#miningB");
const inv = document.querySelector("#inv");

/*Mining Ores*/
let oreT;
let oreC;

/*Playr Upgrades in BlackSmith*/
const BlSm = document.querySelector("#BS");

/*Players Items Lvl*/
const PLvl = document.querySelector("#pLvl");
const cPick = document.querySelector("#cPick")
const GLvl = document.querySelector("#gLvl");

/*Selling*/
const stoneS = document.querySelector("#stP");
const coS = document.querySelector("#coP");
const irP = document.querySelector("#irP");
const reqI = document.querySelector("#reqI");
const reqC = document.querySelector("#reqC");

/*Upgrade Cost*/
/*Pickaxe*/
const priceP = document.querySelector("#priceP");
const XPPT = document.querySelector("#reqXPp");
const CopPT = document.querySelector("#reqCP");
const IroPT = document.querySelector("#reqIP");
const BroPT = document.querySelector("#reqBP");
const allPl = document.querySelector("#allPl")

/*Goggles*/
const priceG = document.querySelector("#priceG");
const XPGT = document.querySelector("#reqXPg");
const CopGT = document.querySelector("#reqCG");
const IroGT = document.querySelector("#reqIG");
const BroGT = document.querySelector("#reqBG");

/*Button Variables BS*/
const BSp = document.querySelector("#pUp");
const BSg = document.querySelector("#gUp");
const BSbm = document.querySelector("#bronzeM");
const sell1 = document.querySelector("#sell1");
const sell2 = document.querySelector("#sell2");
const sell3 = document.querySelector("#sell3");

/*Button Variables XP*/
const up1 = document.querySelector("#up1");
const up2 = document.querySelector("#up2");
const up3 = document.querySelector("#up3");
const upbs = document.querySelector("#upbs")

/*XP Text*/
const lvl1 = document.querySelector("#lvl1");
const lvl2 = document.querySelector("#lvl2");
const lvl3 = document.querySelector("#lvl3");

/*Pricing*/
let goldCostP = 50;
let reqXPP = 100;
let reqCoP = 15;
let reqIrP = 0;
let reqBrP = 0;

let goldCostG = 50;
let reqXPG = 0;
let reqCoG = 0;
let reqIrG = 0;
let reqBrG = 0;

let reqCom = 10;
let reqIrm = 3;

/*Xp upgrade Variables*/
let reqXPXp = 200;
let ExtraXP = 1;

let reqXPMine = 200;
let XpMine = 1;
let slowTimer = 0;

let reqXPGold = 200;
let ExtraGold = 1;

let popCount;

/*Variables*/
/*Player Storage*/
let xp = 50;
let gold = 50;
let stone = 0;
let copper = 0;
let iron = 0;
let bronze = 0;

/*Player Items Lvl*/
/*Pickaxe*/
let pickaxe = ["Rusty Pickaxe", "Copper Pickaxe", "Iron Pickaxe", "Bronze Pickaxe"];
let curpickaxead = ["a"];
let pickLvl = 1;

/*Goggle*/
let goggle = [];
let gogLvl = 0;


/*Locations*/
const locations = [{
        header: "⛺️ Campfire 🔥",
        name: "️Campfire",
        "button text": ["Go to Store", "Go to Cave", "Go to BlackSmith"],
        "button functions": [popBT, goCave, goBS],
        text: "Your resting at a campfire wondering what your next move is. Where do you decide to go?"
    },
    {
        header: "💰 Shop 💵",
        name: "Shop",
        "button text": ["Go to Campfire", "Go to Cave", "Go to BlackSmith"],
        "button functions": [campfire, goCave, goBS],
        text: 'You walk to the store. When you walk in a Swedish person named, "Bulivard," greets you. What will you buy?'
    },
    {
        header: "⛏️ Cave 🔦",
        name: "Cave",
        "button text": ["Go to Campfire", "Go to Store", "Go to BlackSmith"],
        "button functions": [campfire, popBT, goBS],
        text: 'You walk to a sign that says, "DANGER: Entering Here Can/Will Kill You," you scoff and walk into the cave anyways',
    },
    {
        header: "🔥 BlackSmith 🌑",
        name: "️BlackSmith",
        "button text": ["Go to Campfire", "Go to Cave", "Go to Store"],
        "button functions": [campfire, goCave, popBT],
        text: "You walk into the local blacksmith. What will you make?"
    }
];

/*Button Start*/
/*Opening Sequence*/
osb.onclick = displays;

/*Mining Button*/
MB.onclick = pLvl;

/*BlackSmith Buttons*/
BSp.onclick = bPLvl;
BSg.onclick = bGLvl;
BSbm.onclick = bMaker;
sell1.onclick = SS;
sell2.onclick = SC;
sell3.onclick = SI;

/*XP Buttons*/
up1.onclick = QMine
up2.onclick = xpXp
up3.onclick = xpGold

/*Functions*/
/*Changes Displays*/
function displays() {
    osb.style.display = "none";
    dstats.style.display = "flex";
    controls.style.display = "flex";
    text.style.display = "inline";
    txtb.style.display = "inline";
    MB.style.display = "none";
    popButton();
    campfire()
}

/*Location Editor*/
function update(location) {
    th.innerHTML = location.header;
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

/*Home*/
function campfire() {
    MSt.style.display = "none";
    MB.style.display = "none";
    BlSm.style.display = "none";
    body.style.backgroundImage = "url('MS_Imgs/cfire.webp')";
    popButton()
    update(locations[0]);
}

/*Store*/
function goStore() {
    MSt.style.display = "none"
    MB.style.display = "none";
    BlSm.style.display = "none";
    body.style.backgroundImage = "url('MS_Imgs/shop.jpg')";
    update(locations[1]);
}

/*Cave*/
function goCave() {
    MSt.style.display = "flex";
    MB.style.display = "inline";
    BlSm.style.display = "none";
    body.style.backgroundImage = "url('MS_Imgs/cave.jpg')";
    popButton()
    update(locations[2]);
}

/*Opens Inv*/
function goBS() {
    MSt.style.display = "flex";
    MB.style.display = "none";
    BlSm.style.display = "grid";
    body.style.backgroundImage = "url('MS_Imgs/blacksmith.jpg')";
    popButton()
    update(locations[3]);
}

/*Mining Funciton*/
/*Changes the button pick to symbolize what ore you will get depedning on goggle level*/
function orePic() {

    /*Chance Variable*/
    oreC = Math.floor(Math.random() * 100);
    /*Checks to see what level goggles and then goes from there*/
    /*First Lvl*/
    if (gogLvl == 1) {
        if (oreC >= 90) {
            oreT = "c"
        } else {
            oreT = "s";
        }
    }

    /*Second*/
    else if (gogLvl == 2) {
        if (oreC >= 80) {
            oreT = "c";
        } else {
            oreT = "s";
        }
    }

    /*Third*/
    else if (gogLvl == 3) {
        if (oreC >= 70) {
            oreT = "c";
        } else {
            oreT = "s";
        }
    }

    /*Fourth, now theres iron*/
    else if (gogLvl == 4) {
        if (oreC >= 95) {
            oreT = "i";
        } else if (oreC >= 60) {
            oreT = "c";
        } else {
            oreT = "s";
        }
    }

    /*Fifth*/
    else if (gogLvl == 5) {
        if (oreC >= 90) {
            oreT = "i";
        } else if (oreC >= 50) {
            oreT = "c";
        } else {
            oreT = "s";
        }
    }

    /*sixth , final level*/
    else if (gogLvl == 6) {
        if (oreC >= 85) {
            oreT = "i";
        } else if (oreC >= 47) {
            oreT = "c";
        } else {
            oreT = "s";
        }
    } else {
        oreT = "s";
    }

    orechange()
}

/*Ore changer*/
function orechange() {
    if (oreT === "s") {
        MB.style.backgroundImage = "url('MS_Imgs/Mining/stone.jpg')";
    } else if (oreT === "c") {
        MB.style.backgroundImage = "url('MS_Imgs/Mining/copperOre.jpeg')";
    } else if (oreT === "i") {
        MB.style.backgroundImage = "url('MS_Imgs/Mining/ironOre.jpeg')";
    }
    goCave()
}

/*Checks to see pick level, dpeneding on level depends on mining quickness*/
function pLvl() {
    inv.style.display = "inline";
    if (pickLvl === 1) {
        setTimeout(mCounter, 1000 - slowTimer);
    } else if (pickLvl === 2) {
        setTimeout(mCounter, 750 - slowTimer);
    } else if (pickLvl === 3) {
        setTimeout(mCounter, 500 - slowTimer);
    } else if (pickLvl === 4) {
        setTimeout(mCounter, 250 - slowTimer);
    }
}

/*Checks to see what type of ore, adds it to counter*/
function mCounter() {
    inv.style.display = "none";
    if (oreT === "s") {
        stone++;
        stText.innerText = stone;
        xp += 1 * ExtraXP;
        xpText.innerText = xp;
    } else if (oreT === "c") {
        copper++;
        coText.innerText = copper;
        xp += 5 * ExtraXP;
        xpText.innerText = xp;
    } else if (oreT === "i") {
        iron++;
        irText.innerText = iron;
        xp += 10 * ExtraXP;
        xpText.innerText = xp
    }
    orePic();
}

/*Black Smith*/
/*Player Upgrades*/
function bPLvl() {

    /*Checks to see if the user has the req to bu upgrade*/
    if (pickLvl < 4) {
        if (gold - goldCostP >= 0) {
            if (xp - reqXPP >= 0) {
                if (copper - reqCoP >= 0) {
                    if (iron - reqIrP >= 0) {
                        if (bronze - reqBrP >= 0) {

                            /*Subtracts all reqments*/
                            /*Diffrent materials*/
                            gold -= goldCostP;
                            goldText.innerText = gold;
                            goldCostP = goldCostP + 100
                            priceP.innerText = goldCostP

                            xp -= reqXPP;
                            xpText.innerText = xp;
                            reqXPP = reqXPP + 150;
                            XPPT.innerText = reqXPP;

                            copper -= reqCoP;
                            coText.innerText = copper;

                            /*Changes the required minerals to get iron pick*/
                            if (pickLvl == 1) {
                                reqCoP = 0;
                                console.log("cheeese")
                                CopPT.innerText = reqCoP

                                iron -= reqIrP;
                                irText.innerText = iron;
                                reqIrP = reqIrP + 10;
                                IroPT.innerText = reqIrP

                            }

                            /*Changes the required minerals to get bronze pick*/
                            if (pickLvl == 2) {
                                reqIrP = 0;
                                IroPT.innerText = reqIrP
                                bronze -= reqBrP;
                                brText.innerText = bronze;
                                reqBrP = reqBrP + 30
                                BroPT.innerText = reqBrP
                            }

                            /*Adds pick level and changes current pick*/
                            pickLvl++;
                            PLvl.innerText = pickLvl;
                            curpickaxead.push("a")
                            cPick.innerText = pickaxe[curpickaxead.length - 1]

                            if (pickLvl == 4) {
                                priceP.innerText = "Max";
                                XPPT.innerText = "Max";
                                CopPT.innerText = "Max";
                                IroPT.innerText = "Max";
                                BroPT.innerText = "Max";
                                PLvl.innerText = "Max";
                            }
                        }

                        /*Error Messages in case they dont have the resources*/
                        else {
                            text.innerText = "You dont have enough bronze";
                        }
                    } else {
                        text.innerText = "You dont have enough iron";
                    }
                } else {
                    text.innerText = "You dont have enough copper";
                }
            } else {
                text.innerText = "You dont have enough XP";
            }
        } else {
            text.innerText = "You dont have enough Gold";
        }
    } else {
        text.innerText = "Your Pickaxe is max Level";
    }
    setTimeout(goBS, 1500);
}

function bGLvl() {
    /*Checks to see if the user has the req to bu upgrade*/
    if (gogLvl < 6) {
        if (gold - goldCostG >= 0) {
            if (xp - reqXPG >= 0) {
                if (copper - reqCoG >= 0) {
                    if (iron - reqIrG >= 0) {
                        if (bronze - reqBrG >= 0) {

                            /*Subtracts all reqments*/
                            /*Diffrent materials*/
                            gold -= goldCostG;
                            goldText.innerText = gold;
                            goldCostG = goldCostG + 30
                            priceG.innerText = goldCostG

                            xp -= reqXPG;
                            xpText.innerText = xp;
                            reqXPP = reqXPP + 100;
                            XPGT.innerText = reqXPG;

                            /*Changes the required minerals to get iron pick*/
                            if (gogLvl >= 1) {
                                copper -= reqCoG;
                                coText.innerText = copper;
                                reqCoG += 20;
                                CopGT.innerText = reqCoG
                            } else if (gogLvl >= 3) {
                                iron -= reqIrP;
                                irText.innerText = iron;
                                reqIrP = reqIrP + 10;
                                IroPT.innerText = reqIrP

                            }

                            /*Changes the required minerals to get bronze pick*/
                            else if (gogLvl >= 5) {
                                bronze -= reqBrG;
                                brText.innerText = bronze;
                                reqBrG = reqBrG + 30
                                BroGT.innerText = reqBrG
                            }

                            /*Adds goggle level*/
                            gogLvl++;
                            GLvl.innerText = gogLvl;

                            if (gogLvl == 6) {
                                priceP.innerText = "Max";
                                XPPT.innerText = "Max";
                                CopPT.innerText = "Max";
                                IroPT.innerText = "Max";
                                BroPT.innerText = "Max";
                                GLvl.innerText = "Max";
                            }
                        }

                        /*Error Messages in case they dont have the resources*/
                        else {
                            text.innerText = "You dont have enough bronze";
                        }
                    } else {
                        text.innerText = "You dont have enough iron";
                    }
                } else {
                    text.innerText = "You dont have enough copper";
                }
            } else {
                text.innerText = "You dont have enough XP";
            }
        } else {
            text.innerText = "You dont have enough Gold";
        }
    } else {
        text.innerText = "Your Goggle is max Level";
    }
    setTimeout(goBS, 1500);
}

/*Makes bronze if they have the requird minerals*/
function bMaker() {
    if (copper - reqCom >= 0) {
        if (iron - reqIrm >= 0) {
            /*Iron re*/
            iron -= reqIrm;
            irText.innerText = iron;

            copper -= reqCom;
            coText.innerText = copper;

            bronze++;
            brText.innerText = bronze;
        } else {
            text.innerText = "You dont have enough iron";
        }
    } else {
        text.innerText = "You dont have enough copper";
    }

    setTimeout(goBS, 1500);
}

/*Sell Stone*/
function SS() {
    if (stone - 1 >= 0) {
        stone--
        stText.innerText = stone;
        gold += 1 * ExtraGold;
        goldText.innerText = gold;
    }
}

/*Sell Copper*/
function SC() {
    if (copper - 1 >= 0) {
        copper--
        coText.innerText = copper;
        gold += 5 * ExtraGold;
        goldText.innerText = gold;
    }
}

/*Sell Iron*/
function SI() {
    if (iron - 1 >= 0) {
        iron--
        irText.innerText = iron;
        gold += 10  * ExtraGold;
        goldText.innerText = gold;
    }
}

/*Upgrade player for extra gold*/
function xpGold() {
    if (ExtraGold < 4) {
        if (xp - reqXPGold >= 0) {
            xp -= reqXPGold
            xpText.innerText = xp;
            reqXPGold += 200;
            lvl3XP.innerText = reqXPGold
            ExtraGold++;
            lvl3.innerText = ExtraGold

        /*Error Message*/
        } else {
            text.innerText = "You do not have enough xp"
        }
    } else {
    text.innerText = "Extra XP is max Level";
}
setTimeout(goStore, 1500);
}

/*Upgrade player for extra xp*/
function xpXp() {
    if (ExtraXP < 4) {
        if (xp - reqXPXp >= 0) {
            xp -= reqXPXp
            xpText.innerText = xp;
            reqXPXp += 150;
            lvl2XP.innerText = reqXPXp
            XpXp++;
            lvl2.innerText = XpXp

        /*Error Message*/
        } else {
            text.innerText = "You do not have enough xp"
        }
    } else {
    text.innerText = "Extra XP is max Level";
}

setTimeout(goStore, 1500);
}

/*Upgrade player to mine quicker*/
function QMine () {
    if (XpMine < 6) {
        if (xp - reqXPMine >= 0) {
            xp -= reqXPMine
            xpText.innerText = xp;
            reqXPMine += 125;
            lvl1XP.innerText = reqXPMine
            XpMine++;
            lvl1.innerText = XpMine

            /*Changes the slow timer passed on level*/
            if (XpMine == 1) {
                slowTimer = 0;
            }
            else if (XpMine == 2) {
                slowTimer = 50;
            }
            else if (XpMine == 3) {
                slowTimer = 100;
            }
            else if (XpMine == 4) {
                slowTimer = 150;
            }
            else if (XpMine == 5) {
                slowTimer = 200;
            }
            else if (XpMine == 6) {
                slowTimer = 250;
            }

        /*Error Message*/
        } else {
            text.innerText = "You do not have enough xp"
        }
    } else {
    text.innerText = "Extra XP is max Level";
}

setTimeout(goStore, 1500);
}

/*Changes for the button to pop up or not*/
function popBT() {

    popCount= true;
    popButton();
}

function popButton() {
    if (popCount == true) {
        upbs.style.display = "flex";
        popCount = false
        goStore()
    }
    else if (popCount == false) {
        upbs.style.display = "none";
    }
}
