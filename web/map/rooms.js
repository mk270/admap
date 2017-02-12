
function getRooms() {
    return [
        [0, 0, 0, "endofroad"],
        [0, 1, 0, "building"],
        [1, 0, 0, "forest1"],
        [1, -1, 0, "forest2"],
        [0, -1, 1, "hill"],
        [-1, 0, 0, "valley"],
        [-2, 0, 0, "slit"],
        [-3, 0, 0, "outsidegrate"],
        [-3, 0, -1, "belowgrate"],
        [-3, -1, -1, "cobblecrawl"],
        [-3, -2, -1, "debrisroom"],
        [-3, -3, 0, "awkslope"],
        [-3, -4, 1, "birdcmr"],
        [-4, -4, 1, "atbrinkofpit"],
        [-3, -5, 1, "topsmallpit"],
        [-3, -5, 0, "misthall"],
        [-4, -5, 0, "lowroom"],
        [-2, -6, -1, "mtking"],
        [-3, -6, -1, "sschamber"],
        [-1, -6, -1, "lownspass"],
        [0, -6, -1, "y2"],
        [0, -7, -1, "windowpit1"],
        [-1, -5, -1, "jumblerock"],
        [-1, -6, -2, "dirty"],
        [-1, -5, -2, "onbrinkofpit"],
        [-1, -5, -3, "inpit"],
        [-1, -7, -2, "dusty"],
        [-1, -7, -3, "complex"],
        [-1, -6, -4, "anteroom"],
        [-1, -7, -4, "witts"],
        [-1, -8, -3, "bedquilt"],
        [-3, -7, -1, "secewcanyon"],
        [-3, -8, -1, "dragon"],
        [-1, -8, -1, "secnscan0"],
        [0, -8, -1, "mirror"],
        [1, -8, -1, "reservoir"],
        [0, -9, -1, "windowpit2"],
        [-1, -10, -1, "junction3"],
        [-2, -10, -1, "secnsc1"],
        [-3, -10, -1, "atopstalac"],
        [0, -7, -3, "shell"],
        [0, -7, -2, "arched"],
        [0, -7, -4, "ragged"],
        [0, -7, -5, "culdesac"],
        [-2, -7, -1, "wschamber"],
        [-3, -6, 0, "fissuree"],
        [-3, -7, 0, "fissurew"],
        [-3, -8, 0, "wmisthall"],
        [-2, -8, 0, "crossover"],
        [-1, -8, 0, "deadend7"],
        [-3, -9, 0, "longhalle"],
        [-3, -10, 0, "longhallw"],
        [-4, -10, 0, "diffmaze1"],
        [-4, -8, 0, "alikemaze1"],
        [-2, -8, -3, "slab"],
        [-3, -9, -3, "swiss"],
        [-3, -8, -3, "soft"],
        [-3, -10, -3, "twopite"],
        [-3, -11, -3, "twopitw"],
        [-3, -10, -4, "eastpit"],
        [-3, -11, -4, "westpit"],
        [-2, -10, -3, "oriental"],
        [-3, -12, -2, "narrowcorr"],
        [-2, -13, -2, "giantroom"],
        [-1, -12, -2, "cavein"],
        [-1, -13, -2, "immense"],
        [0, -13, -2, "waterfall"],
        [-1, -14, -2, "steepincline"],
        [-1, -11, -3, "llroom"],
        [0, -11, -3, "decrawl"],
        [-4, -9, -3, "tewcanyon"],
        [-5, -8, -3, "nscanyon"],
        [-4, -10, -3, "deadend8"],
        [-6, -8, -3, "canyonde"],
        [-2, -13, -1, "sloping"],
        [-3, -15, 2, "swchasm"],
        [-2, -14, 2, "nechasm"],
        [-1, -13, 2, "incorridor"],
        [0, -12, 2, "fork"],
        [-1, -11, 1, "limestone"],
        [-2, -10, 0, "barrenfront"],
        [-2, -9, -1, "barren"],
        [1, -11, 2, "warmjunction"],
        [2, -11, 2, "bview"],
        [1, -10, 2, "bouldercmr"],
        [-1, -10, -3, "misty"],
        [0, -10, -3, "alcove"],
        [0, -9, -3, "plover"],
        [1, -9, -3, "dark"]
    ];
}

function getLinks() {
    return [
        ["belowgrate", "cobblecrawl"],
        ["cobblecrawl", "debrisroom"],
        ["debrisroom", "awkslope"],
        ["awkslope", "birdcmr"],
        ["birdcmr", "topsmallpit"],
        ["topsmallpit", "misthall"],
        ["misthall", "lowroom"],
        ["misthall", "fissuree"],
        ["fissuree", "fissurew"],
        ["fissurew", "wmisthall"],
        ["misthall", "mtking"],
        ["wmisthall", "longhalle"],
        ["wmisthall", "alikemaze1"],
        ["longhalle", "longhallw"],
        ["longhalle", "crossover"],
        ["longhallw", "diffmaze1"],
        ["longhallw", "crossover"],
        ["crossover", "deadend7"],
        ["crossover", "wschamber"],
        ["wschamber", "mtking"],
        ["sschamber", "mtking"],
        ["mtking", "secewcanyon"],
        ["y2", "jumblerock"],
        ["jumblerock", "misthall"],
        ["y2", "lownspass"],
        ["y2", "windowpit1"],
        ["mtking", "lownspass"],
        ["llroom", "decrawl"],
        ["llroom", "oriental"],
        ["oriental", "misty"],
        ["misty", "alcove"],
        ["oriental", "swiss"],
        ["alcove", "plover"],
        ["plover", "dark"],
        ["swiss", "twopite"],
        ["twopite", "twopitw"],
        ["slab", "twopitw"],
        ["swiss", "soft"],
        ["swiss", "tewcanyon"],
        ["swiss", "bedquilt"],
        ["bedquilt", "complex"],
        ["shell", "complex"],
        ["shell", "arched"],
        ["shell", "ragged"],
        ["ragged", "culdesac"],
        ["complex", "dusty"],
        ["complex", "anteroom"],
        ["anteroom", "witts"],
        ["anteroom", "bedquilt"],
        ["dusty", "dirty"],
        ["dirty", "onbrinkofpit"],
        ["dirty", "lownspass"],
        ["onbrinkofpit", "inpit"],
        ["atbrinkofpit", "birdcmr"],
        ["slab", "bedquilt"],
        ["twopitw", "westpit"],
        ["twopite", "eastpit"],
        ["westpit", "narrowcorr"],
        ["llroom", "sloping"],
        ["swchasm", "sloping"],
        ["swchasm", "nechasm"],
        ["nechasm", "incorridor"],
        ["incorridor", "fork"],
        ["fork", "warmjunction"],
        ["fork", "limestone"],
        ["limestone", "barrenfront"],
        ["barrenfront", "barren"],
        ["bview", "warmjunction"],
        ["bouldercmr", "warmjunction"],
        ["atopstalac", "secnsc1"],
        ["secnsc1", "junction3"],
        ["junction3", "windowpit2"],
        ["junction3", "bedquilt"],
        ["bedquilt", "secnsc1"],
        ["narrowcorr", "giantroom"],
        ["giantroom", "cavein"],
        ["giantroom", "immense"],
        ["immense", "waterfall"],
        ["waterfall", "steepincline"],
        ["steepincline", "llroom"],
        ["dragon", "secnscan0"],
        ["secnscan0", "mirror"],
        ["mirror", "reservoir"],
        ["dragon", "secewcanyon"],
        ["slab", "secnscan0"],
        ["deadend8", "tewcanyon"],
        ["nscanyon", "tewcanyon"],
        ["nscanyon", "canyonde"],
        ["secewcanyon", "nscanyon"],
        ["endofroad", "building"],
        ["endofroad", "valley"],
        ["endofroad", "hill"],
        ["endofroad", "forest1"],
        ["forest1", "forest2"],
        ["valley", "slit"],
        ["slit", "outsidegrate"],
        ["outsidegrate", "belowgrate"]
    ];
}
