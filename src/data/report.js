var lastSixWeeks = [
{ dayStart: "15/03/20", dayEnd: "14/03/19", indexStart: 0, indexEnd: 6},
{ dayStart: "08/03/20", dayEnd: "07/03/20", indexStart: 6, indexEnd: 10},
{ dayStart: "29/02/20", dayEnd: "29/02/20", indexStart: 10, indexEnd: 11},
{ dayStart: "23/02/20", dayEnd: "21/02/20", indexStart: 11, indexEnd: 14},
{ dayStart: "16/02/20", dayEnd: "14/02/20", indexStart: 14, indexEnd: 22},
{ dayStart: "09/02/20", dayEnd: "08/02/20", indexStart: 22, indexEnd: 26},
];

var DeckList = [
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
{ deck: "ADP / Zacian V", currCP: 3983 },
{ deck: "Pikachu & Zekrom-GX", currCP: 1003 },
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 992 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 605 },
{ deck: "Baby Blacephalon", currCP: 517 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 450 },
{ deck: "Cinccino Mill", currCP: 450 },
{ deck: "Malamar / Giratina", currCP: 375 },
{ deck: "Magcargo-GX", currCP: 340 },
{ deck: "Obstagoon", currCP: 320 },
{ deck: "Magcargo Mill", currCP: 200 },
{ deck: "Lucario & Melmetal-GX / Zacian V", currCP: 130 },
{ deck: "Garchomp & Giratina-GX / Mismagius", currCP: 66 },
{ deck: "Doll Stall", currCP: 50 },
{ deck: "Malamar / Garchomp & Giratina-GX", currCP: 25 },
{ deck: "Malamar / Ultra Necrozma-GX", currCP: 12 },
{ deck: "Zacian V", currCP: 10 },
{ deck: "Green's Blacephalon-GX", currCP: 10 },
{ deck: "Mewtwo & Mew-GX / ADP", currCP: 10 },
{ deck: "Whimsicott-GX", currCP: 10 },
{ deck: "ADP / Bird Trio", currCP: 10 },
],
[
{ deck: "ADP / Zacian V", currCP: 3998 },
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 890 },
{ deck: "Pikachu & Zekrom-GX", currCP: 877 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 605 },
{ deck: "Baby Blacephalon", currCP: 490 },
{ deck: "Cinccino Mill", currCP: 462 },
{ deck: "Reshiram & Charizard-GX Toolbox", currCP: 450 },
{ deck: "Malamar / Giratina", currCP: 360 },
{ deck: "Magcargo-GX", currCP: 340 },
{ deck: "Obstagoon", currCP: 320 },
{ deck: "Magcargo Mill", currCP: 200 },
{ deck: "Lucario & Melmetal-GX / Zacian V", currCP: 130 },
{ deck: "Turbo Lapras V", currCP: 10 },
{ deck: "Morpeko Dolls", currCP: 10 },
{ deck: "Zacian V", currCP: 10 },
],
[
{ deck: "ADP / Zacian V", currCP: 144 },
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 60 },
{ deck: "Baby Blacephalon", currCP: 42 },
{ deck: "Pikachu & Zekrom-GX", currCP: 40 },
{ deck: "Malamar / Giratina", currCP: 40 },
{ deck: "Ultimate Mewtwo & Mew-GX", currCP: 27 },
{ deck: "Unown Hand / Salazzle", currCP: 25 },
{ deck: "Cinccino Mill", currCP: 24 },
{ deck: "Turbo Lapras V", currCP: 20 },
{ deck: "Obstagoon", currCP: 10 },
{ deck: "Morpeko Dolls", currCP: 10 },
],
[
{ deck: "ADP / Zacian V", currCP: 1000 },
{ deck: "Ultimate Mewtwo & Mew-GX", currCP: 249 },
{ deck: "Baby Blacephalon", currCP: 242 },
{ deck: "Cinccino Mill", currCP: 87 },
{ deck: "Mewtwo & Mew-GX Toolbox", currCP: 75 },
{ deck: "Pikachu & Zekrom-GX", currCP: 40 },
{ deck: "Malamar / Giratina", currCP: 40 },
{ deck: "Obstagoon", currCP: 35 },
{ deck: "Rowlet & Alolan Exeggutor-GX Toolbox", currCP: 32 },
{ deck: "Unown Hand / Salazzle", currCP: 25 },
{ deck: "Malamar / Mewtwo & Mew-GX", currCP: 12 },
{ deck: "Lucario & Melmetal-GX / Zacian V", currCP: 10 },
{ deck: "Turbo Lapras V", currCP: 10 },
],
];

module.exports = {
   lastSixWeeks: lastSixWeeks,
   DeckList: DeckList
};