import {useState} from "react"

const listOfMaps = {
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

const CDN = {
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

type GameMode = keyof typeof listOfMaps

const buttons: GameMode[] = [
    "Bounty",
    "Gem Grab",
    "Brawl Ball",
    "Heist",
    "Hot Zone",
    "Knockout",
]

function App() {
    const [mode, setMode] = useState<GameMode>("Bounty")
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [selectedMap, setSelectedMap] = useState<keyof typeof CDN | null>(
        null
    )

    const showMode = (data: GameMode) => {
        setMode(data)
        console.log(data)
        if (mode === data) {
            setDropdownVisible((prev) => !prev)
        } else {
            setDropdownVisible(true)
        }
    }

    const showMap = (mapName: string) => {
        setSelectedMap((prevMap) =>
            prevMap === mapName ? null : (mapName as keyof typeof CDN)
        )
    }

    return (
        <div className="h-screen relative box-border overflow-hidden">
            <div className="absolute inset-0 bg-black">
                <div className="text-white flex min-h-full items-start mt-5 w-screen ml-[4%]">
                    <div className="flex gap-5 flex-col">
                        <div className="flex gap-5">
                            {buttons.map((item, index) => (
                                <button
                                    key={index}
                                    className="z-2 hover:cursor-pointer min-w-25 bg-green-700/50 py-3 rounded-xl hover:bg-green-600"
                                    onClick={() => showMode(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4">
                            {dropdownVisible &&
                                Object.entries(listOfMaps[mode]).map(
                                    ([key, value]) => (
                                        <>
                                            <div
                                                key={key}
                                                className="z-2 bg-image bg-gradient-to-r from-green-500 to-pink-500 max-w-fit bg-clip-text text-transparent text-xl hover:cursor-pointer hover:from-red-500 hover:to-yellow-500 hover:scale-125 transition-all font-semibold"
                                            >
                                                <button
                                                    className="z-2 hover:cursor-pointer"
                                                    onClick={() => {
                                                        showMap(key)
                                                    }}
                                                >
                                                    {value}
                                                </button>
                                            </div>
                                        </>
                                    )
                                )}
                            <div className="z-3 transition-all duration-500 animate-pulse absolute left-60 mt-5">
                                {selectedMap ? (
                                    <img
                                        className="max-w-[55%] object-contain border-5 rounded-xl border-white opacity-0 transition-opacity duration-1000"
                                        src={`https://res.cloudinary.com/dyoojcyfa/image/upload/v1739294645/${CDN[selectedMap]}.webp`}
                                        alt={selectedMap}
                                        onLoad={(e) =>
                                            e.currentTarget.classList.replace(
                                                "opacity-0",
                                                "opacity-100"
                                            )
                                        }
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`transition-all duration-500 absolute inset-0 left-[50%] bg-[url('/src/assets/background.png')] bg-cover bg-no-repeat flex justify-center ${
                    selectedMap ? "top-[10%]" : null
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent " />
            </div>
        </div>
    )
}

export default App
