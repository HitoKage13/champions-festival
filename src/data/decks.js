const decks = [
    // UPR-SWS
    { archetype: "Zacian V", thumbnails: ["./assets/sprites/zacian-crowned.png"] },
    { archetype: "Magcargo Mill", thumbnails: ["./assets/sprites/249.png","./assets/sprites/1099.png","./assets/sprites/brycen-man.png"] },
    { archetype: "Obstagoon", thumbnails: ["./assets/sprites/obstagoon.png"] },
    { archetype: "Cinccino Mill", thumbnails: ["./assets/sprites/639.png","./assets/sprites/1099.png","./assets/sprites/brycen-man.png"] },
    { archetype: "Magcargo-GX", thumbnails: ["./assets/sprites/249.png"] },
    { archetype: "Lucario & Melmetal-GX / Zacian V", thumbnails: ["./assets/sprites/489.png","./assets/sprites/1161.png","./assets/sprites/zacian-crowned.png"] },
    { archetype: "ADP / Zacian V", thumbnails: ["./assets/sprites/541.png","./assets/sprites/zacian-crowned.png"] },
    // UPR-CEC
    { archetype: "Mewtwo & Mew-GX / ADP", thumbnails: ["./assets/sprites/155.png","./assets/sprites/156.png", "./assets/sprites/541.png"] },
    { archetype: "Green's Blacephalon-GX", thumbnails: ["./assets/sprites/1156.png"] },
    { archetype: "Gengar & Mimikyu-GX", thumbnails: ["./assets/sprites/100.png","./assets/sprites/1112.png"] },
    { archetype: "Malamar / Mewtwo & Mew-GX", thumbnails: ["./assets/sprites/811.png","./assets/sprites/155.png","./assets/sprites/156.png"] },
    { archetype: "Volcarona / Silvally-GX", thumbnails: ["./assets/sprites/711.png","./assets/sprites/1107.png"] },
    { archetype: "ADP / Raichu & Alolan Raichu-GX", thumbnails: ["./assets/sprites/541.png","./assets/sprites/32.png","./assets/sprites/1037.png"] },
    { archetype: "Persian-GX Checkmate", thumbnails: ["./assets/sprites/59.png"] },
    { archetype: "Fossil Box", thumbnails: ["./assets/sprites/444.png","./assets/sprites/631.png","./assets/sprites/147.png"] },
    { archetype: "ADP Control", thumbnails: ["./assets/sprites/541.png","./assets/sprites/529.png","./assets/sprites/530.png"] },
    { archetype: "Malamar / Naganadel & Guzzlord-GX", thumbnails: ["./assets/sprites/811.png","./assets/sprites/1155.png","./assets/sprites/1133.png"] },
    { archetype: "Green's Garchomp & Giratina-GX", thumbnails: ["./assets/sprites/486.png","./assets/sprites/534.png"] },
    { archetype: "Tangrowth / Absol", thumbnails: ["./assets/sprites/506.png","./assets/sprites/389.png"] },
    { archetype: "ADP / Pheromosa & Buzzwole-GX", thumbnails: ["./assets/sprites/541.png","./assets/sprites/1129.png","./assets/sprites/1128.png"] },
    { archetype: "Reshiram & Zekrom-GX", thumbnails: ["./assets/sprites/719.png","./assets/sprites/720.png"] },
    { archetype: "Green's Blastoise & Piplup-GX", thumbnails: ["./assets/sprites/16.png","./assets/sprites/428.png"] },
    { archetype: "Green's Beast Box", thumbnails: ["./assets/sprites/1155.png","./assets/sprites/1128.png","./assets/sprites/1157.png"] },
    { archetype: "ADP / Bird Trio", thumbnails: ["./assets/sprites/541.png","./assets/sprites/151.png","./assets/sprites/150.png","./assets/sprites/149.png"] },
    { archetype: "Granbull", thumbnails: ["./assets/sprites/240.png"] },
    { archetype: "Nuzzle Toolbox", thumbnails: ["./assets/sprites/32.png","./assets/sprites/456.png","./assets/sprites/659.png"] },
    { archetype: "Garchomp & Giratina-GX / Mismagius", thumbnails: ["./assets/sprites/486.png","./assets/sprites/534.png","./assets/sprites/471.png"] },
    { archetype: "Green's Charizard & Braixen-GX", thumbnails: ["./assets/sprites/14.png","./assets/sprites/738.png"] },
    { archetype: "Quagsire / Silvally-GX", thumbnails: ["./assets/sprites/198.png","./assets/sprites/1107.png"] },
    { archetype: "Charizard & Braixen-GX / Omastar", thumbnails: ["./assets/sprites/14.png","./assets/sprites/738.png","./assets/sprites/144.png"] },
    { archetype: "Charizard TEU / Ninetales", thumbnails: ["./assets/sprites/14.png","./assets/sprites/44.png"] },
    { archetype: "Charizard TEU / Salazzle", thumbnails: ["./assets/sprites/14.png","./assets/sprites/1092.png"] },
    { archetype: "Aerodactyl-GX", thumbnails: ["./assets/sprites/147.png"] },
    { archetype: "Malamar / Solgaleo & Lunala-GX", thumbnails: ["./assets/sprites/811.png","./assets/sprites/1125.png","./assets/sprites/1126.png"] },
    { archetype: "Malamar / Trevenant & Dusknoir-GX", thumbnails: ["./assets/sprites/811.png","./assets/sprites/833.png","./assets/sprites/518.png"] },
    { archetype: "Doll Stall", thumbnails: ["./assets/sprites/pokedoll.png","./assets/sprites/781.png"] },
    { archetype: "Naganadel & Guzzlord-GX / Mismagius", thumbnails: ["./assets/sprites/1155.png","./assets/sprites/1133.png","./assets/sprites/471.png"] },
    { archetype: "Green's Arceus & Dialga & Palkia-GX", thumbnails: ["./assets/sprites/541.png","./assets/sprites/529.png","./assets/sprites/530.png"] },
    { archetype: "Arceus & Dialga & Palkia-GX / Spiritomb", thumbnails: ["./assets/sprites/541.png","./assets/sprites/529.png","./assets/sprites/530.png","./assets/sprites/483.png"] },
    { archetype: "Arceus & Dialga & Palkia-GX / Keldeo-GX", thumbnails: ["./assets/sprites/541.png","./assets/sprites/529.png","./assets/sprites/530.png","./assets/sprites/726.png"] },
    { archetype: "Arceus & Dialga & Palkia-GX", thumbnails: ["./assets/sprites/541.png","./assets/sprites/529.png","./assets/sprites/530.png"] },
    // UPR-HIF
    { archetype: "Dusk Mane Necrozma-GX / Magnezone", thumbnails: ["./assets/sprites/1158.png","./assets/sprites/503.png"] },
    { archetype: "Green's Ultra Beasts", thumbnails: ["./assets/sprites/1158.png","./assets/sprites/1128.png","./assets/sprites/1157.png"] },
    { archetype: "Trevenant & Dusknoir-GX / Mismagius", thumbnails: ["./assets/sprites/833.png","./assets/sprites/518.png","./assets/sprites/471.png"] },
    { archetype: "Mewtwo & Mew-GX / Magnezone", thumbnails: ["./assets/sprites/155.png","./assets/sprites/156.png","./assets/sprites/503.png"] },
    { archetype: "Marshadow & Machamp-GX / Mismagius", thumbnails: ["./assets/sprites/1136.png","./assets/sprites/74.png","./assets/sprites/471.png"] },
    { archetype: "Baby Blacephalon / Pidgeotto", thumbnails: ["./assets/sprites/1156.png","./assets/sprites/23.png"] },
    { archetype: "Green's Lucario & Melmetal-GX", thumbnails: ["./assets/sprites/489.png","./assets/sprites/1161.png"] },
    { archetype: "Turtonator / Naganadel", thumbnails: ["./assets/sprites/1110.png","./assets/sprites/1155.png"] },
    { archetype: "Mewtwo & Mew-GX / Shedinja", thumbnails: ["./assets/sprites/155.png","./assets/sprites/156.png","./assets/sprites/322.png"] },
    { archetype: "Aegislash", thumbnails: ["./assets/sprites/804.png"] },
    { archetype: "Gengar & Mimikyu-GX / Omastar", thumbnails: ["./assets/sprites/100.png","./assets/sprites/1112.png","./assets/sprites/144.png"] },
    { archetype: "Welder Toolbox", thumbnails: ["./assets/sprites/1110.png","./assets/sprites/44.png","./assets/sprites/417.png"] },
    { archetype: "Keldeo-GX / White Kyurem", thumbnails: ["./assets/sprites/726.png","./assets/sprites/724.png"] },
    { archetype: "Froslass / Lucario-GX", thumbnails: ["./assets/sprites/519.png","./assets/sprites/489.png"] },
    { archetype: "Breloom", thumbnails: ["./assets/sprites/316.png"] },
    { archetype: "Poipole Stall", thumbnails: ["./assets/sprites/1154.png"] },
    { archetype: "Whimsicott-GX", thumbnails: ["./assets/sprites/611.png"] },
    { archetype: "Spiritomb / Froslass", thumbnails: ["./assets/sprites/483.png","./assets/sprites/519.png"] },
    { archetype: "Beheeyem", thumbnails: ["./assets/sprites/680.png"] },
    { archetype: "Pidgeotto Control", thumbnails: ["./assets/sprites/23.png","./assets/sprites/1099.png"] },
    { archetype: "Gardevoir & Sylveon-GX", thumbnails: ["./assets/sprites/312.png","./assets/sprites/824.png"] },
    { archetype: "Weavile-GX Toolbox", thumbnails: ["./assets/sprites/502.png"] },
    { archetype: "Blastoise / Keldeo-GX", thumbnails: ["./assets/sprites/16.png","./assets/sprites/726.png"] },
    { archetype: "Malamar / Garchomp & Giratina-GX", thumbnails: ["./assets/sprites/811.png","./assets/sprites/486.png","./assets/sprites/534.png"] },
    { archetype: "Malamar / Ultra Necrozma-GX", thumbnails: ["./assets/sprites/811.png","./assets/sprites/1151.png"] },
    { archetype: "Malamar / Giratina", thumbnails: ["./assets/sprites/811.png","./assets/sprites/533.png"] },
    { archetype: "Pikachu & Zekrom-GX", thumbnails: ["./assets/sprites/31.png","./assets/sprites/720.png"] },
    { archetype: "Green's Reshiram & Charizard-GX", thumbnails: ["./assets/sprites/719.png","./assets/sprites/14.png","./assets/sprites/852.png"] },
    { archetype: "Reshiram & Charizard-GX Toolbox", thumbnails: ["./assets/sprites/719.png","./assets/sprites/14.png"] },
    { archetype: "Mewtwo & Mew-GX Toolbox", thumbnails: ["./assets/sprites/155.png","./assets/sprites/156.png"] },
    { archetype: "Blacephalon-GX / Naganadel", thumbnails: ["./assets/sprites/1156.png","./assets/sprites/1155.png"] },
    { archetype: "Baby Blacephalon", thumbnails: ["./assets/sprites/1156.png"] },
    { archetype: "Quagsire / Naganadel", thumbnails: ["./assets/sprites/198.png","./assets/sprites/1155.png"] },
    { archetype: "Naganadel-GX Checkmate", thumbnails: ["./assets/sprites/1155.png"] },
    // SUM-UNB
    { archetype: "Weezing Spread", thumbnails: ["./assets/sprites/116.png"] },
    { archetype: "Donphan / Florges", thumbnails: ["./assets/sprites/262.png","./assets/sprites/781.png"] },
    { archetype: "Zoroark-GX / Greninja & Zoroark-GX", thumbnails: ["./assets/sprites/637.png","./assets/sprites/742.png"] },
    { archetype: "Vileplume Stall", thumbnails: ["./assets/sprites/51.png"] },
    { archetype: "Zoroark-GX Checkmate", thumbnails: ["./assets/sprites/637.png","./assets/sprites/1155.png"] },
    { archetype: "Zoroark-GX / Dewgong", thumbnails: ["./assets/sprites/637.png","./assets/sprites/93.png"] },
    { archetype: "Zoroark-GX / Persian", thumbnails: ["./assets/sprites/637.png","./assets/sprites/59.png"] },
    { archetype: "Zoroark-GX / Silvally-GX", thumbnails: ["./assets/sprites/637.png","./assets/sprites/1107.png"] },
    { archetype: "Zygarde-GX", thumbnails: ["./assets/sprites/984.png"] },
    { archetype: "Zapdos / Ultra Beasts", thumbnails: ["./assets/sprites/150.png","./assets/sprites/1128.png","./assets/sprites/1127.png"] },
    { archetype: "Beast Box", thumbnails: ["./assets/sprites/1155.png","./assets/sprites/1128.png","./assets/sprites/1157.png"] },
    // BW-CEC
    { archetype: "Malamar / Gourgeist", thumbnails: ["./assets/sprites/811.png","./assets/sprites/838.png"] },
    { archetype: "Rowlet & Alolan Exeggutor-GX Toolbox", thumbnails: ["./assets/sprites/1053.png","./assets/sprites/1051.png"] },

];

// export default decks;
module.exports = decks;
