var lastSixWeeks = [
{ dayStart: "23/02/20", dayEnd: "21/02/20", indexStart: 0, indexEnd: 3},
{ dayStart: "16/02/20", dayEnd: "14/02/20", indexStart: 3, indexEnd: 13},
{ dayStart: "09/02/20", dayEnd: "08/02/20", indexStart: 13, indexEnd: 17},
{ dayStart: "27/01/20", dayEnd: "27/01/20", indexStart: 17, indexEnd: 18},
{ dayStart: "26/01/20", dayEnd: "24/01/20", indexStart: 18, indexEnd: 27},
{ dayStart: "19/01/20", dayEnd: "18/01/20", indexStart: 27, indexEnd: 33},
];

var DeckList = [
[
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 384 },
{ deck: "Baby Blacephalon", currCP: 167 },
{ deck: "Malamar / Giratina", currCP: 119 },
{ deck: "Pikachu & Zekrom-GX", currCP: 115 },
{ deck: "ADP / Bird Trio", currCP: 101 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 72 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 70 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 60 },
{ deck: "Gardevoir & Sylveon-GX", currCP: 52 },
{ deck: "ADP / Raichu & Alolan Raichu-GX", currCP: 40 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 37 },
{ deck: "Doll Stall", currCP: 32 },
{ deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", currCP: 32 },
{ deck: "Persian-GX Checkmate", currCP: 25 },
{ deck: "Green's Lucario & Melmetal-GX", currCP: 25 },
{ deck: "Green's Reshiram & Charizard-GX", currCP: 25 },
{ deck: "Volcarona / Silvally-GX", currCP: 15 },
{ deck: "Trevenant & Dusknoir-GX / Mismagius", currCP: 12 },
{ deck: "Baby Blacephalon / Pidgeotto", currCP: 10 },
{ deck: "Pidgeotto Control", currCP: 10 },
{ deck: "Blacephalon-GX / Naganadel", currCP: 10 },
{ deck: "Gengar & Mimikyu-GX", currCP: 10 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 10 },
],
[
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 156 },
{ deck: "Pikachu & Zekrom-GX", currCP: 105 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 87 },
{ deck: "Baby Blacephalon", currCP: 67 },
{ deck: "Gardevoir & Sylveon-GX", currCP: 52 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 45 },
{ deck: "ADP / Bird Trio", currCP: 44 },
{ deck: "Pidgeotto Control", currCP: 42 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 40 },
{ deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", currCP: 32 },
{ deck: "Fossil Box", currCP: 25 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 22 },
{ deck: "Volcarona / Silvally-GX", currCP: 15 },
{ deck: "Trevenant & Dusknoir-GX / Mismagius", currCP: 12 },
{ deck: "Baby Blacephalon / Pidgeotto", currCP: 10 },
{ deck: "Blacephalon-GX / Naganadel", currCP: 10 },
{ deck: "Gengar & Mimikyu-GX", currCP: 10 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 10 },
],
[
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 100 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 97 },
{ deck: "Pikachu & Zekrom-GX", currCP: 92 },
{ deck: "Gardevoir & Sylveon-GX", currCP: 75 },
{ deck: "Pidgeotto Control", currCP: 64 },
{ deck: "Baby Blacephalon / Pidgeotto", currCP: 50 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 35 },
{ deck: "Arceus & Dialga & Palkia-GX / Keldeo-GX", currCP: 32 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 25 },
{ deck: "Fossil Box", currCP: 25 },
{ deck: "Weavile-GX Toolbox", currCP: 12 },
{ deck: "Baby Blacephalon", currCP: 12 },
{ deck: "Malamar / Giratina", currCP: 10 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 10 },
{ deck: "Nuzzle Toolbox", currCP: 10 },
],
[
{ deck: "Pikachu & Zekrom-GX", currCP: 178 },
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 152 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 113 },
{ deck: "Gardevoir & Sylveon-GX", currCP: 75 },
{ deck: "Doll Stall", currCP: 50 },
{ deck: "Baby Blacephalon / Pidgeotto", currCP: 50 },
{ deck: "Baby Blacephalon", currCP: 39 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 35 },
{ deck: "Pidgeotto Control", currCP: 32 },
{ deck: "Malamar / Giratina", currCP: 25 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 25 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 22 },
{ deck: "Weavile-GX Toolbox", currCP: 12 },
{ deck: "Green's Blacephalon-GX", currCP: 10 },
{ deck: "Mewtwo & Mew-GX / ADP", currCP: 10 },
{ deck: "Whimsicott-GX", currCP: 10 },
{ deck: "ADP / Bird Trio", currCP: 10 },
{ deck: "Nuzzle Toolbox", currCP: 10 },
],
[
{ deck: "ADP / Zacian V", currCP: 3967 },
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 982 },
{ deck: "Pikachu & Zekrom-GX", currCP: 968 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 605 },
{ deck: "Baby Blacephalon", currCP: 517 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 450 },
{ deck: "Cinccino Mill", currCP: 450 },
{ deck: "Malamar / Giratina", currCP: 375 },
{ deck: "Magcargo-GX", currCP: 340 },
{ deck: "Obstagoon", currCP: 320 },
{ deck: "Lucario & Melmetal-GX / Zacian V", currCP: 130 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 66 },
{ deck: "Doll Stall", currCP: 50 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 25 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 12 },
{ deck: "Green's Blacephalon-GX", currCP: 10 },
{ deck: "Mewtwo & Mew-GX / ADP", currCP: 10 },
{ deck: "Whimsicott-GX", currCP: 10 },
{ deck: "ADP / Bird Trio", currCP: 10 },
],
];

module.exports = {
   lastSixWeeks: lastSixWeeks,
   DeckList: DeckList
};