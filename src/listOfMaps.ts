export const listOfMaps = {
    Bounty: {
        snakePrairie: "Snake Prairie",
        canalGrande: "Canal Grande",
        shootingStar: "Shooting Star",
        hideout: "Hideout",
    },
    "Gem Grab": {
        hardRockMine: "Hard Rock Mine",
        doubleSwoosh: "Double Swoosh",
        lastStop: "Last Stop",
        Undermine: "Undermine",
    },
    "Brawl Ball": {
        tripleDribble: "Triple Dribble",
        centerStage: "Center Stage",
        pinballDreams: "Pinball Dreams",
        sneakyFields: "Sneaky Fields",
    },
    Heist: {
        hotPotato: "Hot Potato",
        safeZone: "Safe Zone",
        bridgeTooFar: "Bridge Too Far",
        kaboomCanyon: "Kaboom Canyon",
    },
    "Hot Zone": {
        duelingBeetles: "Dueling Beetles",
        ringOfFire: "Ring Of Fire",
        parallelPlays: "Parallel Plays",
        openBusiness: "Open Business",
    },
    Knockout: {
        outInTheOpen: "Out in The Open",
        goldarmGulch: "Goldarm Gulch",
        flaringPhoenix: "Flaring Phoenix",
        bellesRock: "Belle's Rock",
    },
}

export const CDN = {
    snakePrairie: "snakePrairie_ncwlzr",
    canalGrande: "canalGrande_gqurlm",
    shootingStar: "shootingStar_gqfsqt",
    hideout: "hideout_ddf5kz",
    hardRockMine: "hardRockMine_ylcgwe",
    doubleSwoosh: "doubleSwoosh_wyrmlo",
    lastStop: "lastStop_pdbnny",
    Undermine: "Undermine_egopmj",
    tripleDribble: "tripleDribble_vtiyd8",
    centerStage: "centerStage_mloitm",
    pinballDreams: "pinballDreams_p62njb",
    sneakyFields: "sneakyFields_vxdwgq",
    hotPotato: "hotPotato_yrzoyq",
    safeZone: "safeZone_bhlacp",
    bridgeTooFar: "bridgeTooFar_naqqfx",
    kaboomCanyon: "kaboomCanyon_vek5al",
    duelingBeetles: "duelingBeetles_jb2ino",
    ringOfFire: "ringOfFire_xplda0",
    parallelPlays: "parallelPlays_drywrt",
    openBusiness: "openBusiness_xewklf",
    outInTheOpen: "outInTheOpen_epjxrj",
    goldarmGulch: "goldarmGulch_yrf4tc",
    flaringPhoenix: "flaringPhoenix_c7mpzs",
    bellesRock: "bellesRock_dznn4y",
}

export const buttons: GameMode[] = [
    "Bounty",
    "Gem Grab",
    "Brawl Ball",
    "Heist",
    "Hot Zone",
    "Knockout",
]

type GameMode = keyof typeof listOfMaps