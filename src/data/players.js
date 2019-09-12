const players = [
{ name: "Louis Chi",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 1 },
], points: 50 },
{ name: "Jiawei Sun",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 40 },
{ name: "Jackie Su",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 3 },
], points: 32 },
{ name: "Yu Xiang",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 4 },
], points: 32 },
{ name: "Ji Chen",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 5 },
], points: 25 },
{ name: "Eddie Teahu",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 6 },
], points: 25 },
{ name: "Kelvin Cheung",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 7 },
], points: 25 },
{ name: "Tommy Xie",
achievements: [{ date: "08/09/19", tournament: "Baydragon Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 8 },
], points: 25 },
{ name: "Matthew Bray",
achievements: [{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 1 },
], points: 50 },
{ name: "Stephen Kirk",
achievements: [{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 40 },
{ name: "Andrew Tandianus",
achievements: [{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 3 },
], points: 32 },
{ name: "Terrence Wong",
achievements: [{ date: "08/09/19", tournament: "Cannington Cup", cycle: "Quarter 1", deck: "Spiritomb / Froslass", placing: 4 },
], points: 32 },
{ name: "Christian Hasbani",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 1 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Malamar / Giratina", placing: 1 },
], points: 100 },
{ name: "Paul Coletta",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Baby Blacephalon", placing: 2 },
], points: 52 },
{ name: "Ying Hao Tou",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 3 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 29 },
{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Green's Reshiram & Charizard-GX", placing: 1 },
{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
], points: 141 },
{ name: "Henry Brand",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 4 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Mew & Mewtwo-GX Toolbox", placing: 7 },
], points: 202 },
{ name: "Brent Tonisson",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 5 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Malamar / Ultra Necrozma-GX", placing: 1 },
], points: 172 },
{ name: "Mitchell Dowling",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Beheeyem", placing: 6 },
{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Baby Blacephalon", placing: 4 },
], points: 35 },
{ name: "Chuyao Zhou",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Beheeyem", placing: 7 },
], points: 25 },
{ name: "Joshua Stone",
achievements: [{ date: "08/09/19", tournament: "Maitland Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 3 },
{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "07/07/19", tournament: "Penrith LC", cycle: "July", deck: "Malamar / Ultra Necrozma-GX", placing: 4 },
], points: 55 },
{ name: "Wei Jie Fo",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 1 },
], points: 50 },
{ name: "Jit Min Lim",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Pidgeotto Control", placing: 2 },
], points: 40 },
{ name: "Bryan Chan",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 32 },
{ name: "Tan Jun Hao",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Gardevoir & Sylveon-GX", placing: 4 },
], points: 32 },
{ name: "Joshua Zheng",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 5 },
], points: 25 },
{ name: "Titally Tan",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
], points: 25 },
{ name: "Clifton Goh",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 7 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 19 },
], points: 85 },
{ name: "Jeremy Leong",
achievements: [{ date: "07/09/19", tournament: "Singapore Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
], points: 25 },
{ name: "Shane Quinn",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 2 },
{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Vileplume Stall", placing: 3 },
], points: 50 },
{ name: "Jack Millar",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 5 },
{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 12 },
{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 4 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 4 },
{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 4 },
], points: 135 },
{ name: "Lucas Hamilton-Foster",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 6 },
], points: 25 },
{ name: "Damian Lang",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Malamar / Garchomp & Giratina-GX", placing: 7 },
], points: 25 },
{ name: "Blake Lobina",
achievements: [{ date: "07/09/19", tournament: "Newcastle Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 8 },
], points: 25 },
{ name: "Kaiwen Cabbabe",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 1 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 1 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Vileplume Stall", placing: 1 },
], points: 230 },
{ name: "Angus Johnson",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 172 },
{ name: "Carol Poyner",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Green's Reshiram & Charizard-GX", placing: 3 },
{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Green's Reshiram & Charizard-GX", placing: 2 },
], points: 142 },
{ name: "Aaron Stringfellow",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 6 },
{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 134 },
{ name: "Jay Tyrell",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Quagsire / Naganadel", placing: 7 },
], points: 100 },
{ name: "Joshua Bradley",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Green's Reshiram & Charizard-GX", placing: 8 },
], points: 100 },
{ name: "Ashton Bradley",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Blacephalon-GX / Naganadel", placing: 9 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 3 },
], points: 90 },
{ name: "Sameer Sangwan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 10 },
], points: 80 },
{ name: "Darcy Ryan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Blacephalon-GX / Naganadel", placing: 11 },
], points: 80 },
{ name: "Matthew Burris",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 13 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 3 },
{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Vileplume Stall", placing: 3 },
], points: 100 },
{ name: "Nicholas Apostolou",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 14 },
{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 8 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 98 },
{ name: "James Cox",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Naganadel-GX Checkmate", placing: 15 },
{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 3 },
], points: 90 },
{ name: "Michael Kan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 16 },
{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 4 },
], points: 90 },
{ name: "Mikaere Newey",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Blastoise / Keldeo-GX", placing: 17 },
], points: 60 },
{ name: "Mitch Knuckey",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 18 },
], points: 60 },
{ name: "Klive Aw",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 20 },
], points: 60 },
{ name: "York Robson",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Malamar / Garchomp & Giratina-GX", placing: 21 },
], points: 60 },
{ name: "Alex Crockford",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 22 },
], points: 60 },
{ name: "Anders Balle",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Quagsire / Naganadel", placing: 23 },
], points: 60 },
{ name: "Jack Fone",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 24 },
], points: 60 },
{ name: "Tripp May",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Baby Blacephalon", placing: 25 },
], points: 60 },
{ name: "Robin Sangwan",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Pikachu & Zekrom-GX", placing: 26 },
], points: 60 },
{ name: "Edward Mouanoutoua",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 27 },
], points: 60 },
{ name: "Ehren Roebuck",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 28 },
{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 2 },
], points: 72 },
{ name: "Ben D. Hall",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 30 },
], points: 60 },
{ name: "Corey Munro",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Mew & Mewtwo-GX Toolbox", placing: 31 },
], points: 60 },
{ name: "Naomi Murn",
achievements: [{ date: "31/08/19", tournament: "Melbourne SPE", cycle: "N/A", deck: "Ability Reshiram & Charizard-GX", placing: 32 },
], points: 60 },
{ name: "Adrian Velasco",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
], points: 50 },
{ name: "Adrian Acuzar",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 2 },
], points: 40 },
{ name: "Alexander Jason Macaraniag",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Mew & Mewtwo-GX Toolbox", placing: 3 },
], points: 32 },
{ name: "Antoni Acuzar",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 4 },
], points: 32 },
{ name: "Joshua Doctolero",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 5 },
], points: 25 },
{ name: "Paul Neilmer Feliciano",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Blacephalon-GX / Naganadel", placing: 6 },
], points: 25 },
{ name: "Kenneth Chan",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 7 },
], points: 25 },
{ name: "Carlo Neria",
achievements: [{ date: "25/08/19", tournament: "Courtside Cup", cycle: "Quarter 1", deck: "Green's Reshiram & Charizard-GX", placing: 8 },
], points: 25 },
{ name: "Aaron van der Kolk",
achievements: [{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 1 },
], points: 15 },
{ name: "Callum Walker",
achievements: [{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 3 },
], points: 10 },
{ name: "Jon Gameau",
achievements: [{ date: "25/08/19", tournament: "Adelaide LC", cycle: "August", deck: "Weavile-GX Toolbox", placing: 4 },
], points: 10 },
{ name: "James Williams",
achievements: [{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
], points: 15 },
{ name: "John Bishop",
achievements: [{ date: "25/08/19", tournament: "Gold Coast LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 12 },
{ name: "Nicholas Moore",
achievements: [{ date: "24/08/19", tournament: "Neo Tokyo LC", cycle: "August", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
], points: 15 },
{ name: "Adam C",
achievements: [{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Blacephalon-GX / Naganadel", placing: 4 },
], points: 10 },
{ name: "Joseph Tran",
achievements: [{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 5 },
], points: 8 },
{ name: "Damian Filiposki",
achievements: [{ date: "24/08/19", tournament: "Ormond LC", cycle: "August", deck: "Pikachu & Zekrom-GX", placing: 6 },
], points: 8 },
{ name: "Mehul Gajwani",
achievements: [{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Donphan / Florges", placing: 1 },
], points: 15 },
{ name: "Nicole Manasan",
achievements: [{ date: "11/08/19", tournament: "Penrith LC", cycle: "August", deck: "Zoroark-GX / Greninja & Zoroark-GX", placing: 4 },
], points: 10 },
{ name: "Jake Cruwys",
achievements: [{ date: "10/08/19", tournament: "Newcastle LC", cycle: "August", deck: "Zoroark-GX Checkmate", placing: 2 },
{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Zoroark-GX / Dewgong", placing: 4 },
], points: 22 },
{ name: "Melvyn Lee",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Zoroark-GX / Persian", placing: 1 },
], points: 50 },
{ name: "Izmir Armani",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 40 },
{ name: "Jinn Chung",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Zygarde-GX", placing: 3 },
], points: 32 },
{ name: "Fabian Kenel",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Zoroark-GX / Silvally-GX", placing: 4 },
], points: 32 },
{ name: "Syahmi Razak",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Pikachu & Zekrom-GX", placing: 5 },
], points: 25 },
{ name: "Rinesh John",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Baby Blacephalon", placing: 6 },
], points: 25 },
{ name: "Alex Chee",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 7 },
], points: 25 },
{ name: "Ismat Myron",
achievements: [{ date: "10/08/19", tournament: "Kuala Lumpur Cup", cycle: "Quarter 1", deck: "Malamar / Ultra Necrozma-GX", placing: 8 },
], points: 25 },
{ name: "Zachery Quince",
achievements: [{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Baby Blacephalon", placing: 1 },
], points: 15 },
{ name: "Blake Troy",
achievements: [{ date: "27/07/19", tournament: "Neo Tokyo LC", cycle: "July", deck: "Vileplume Stall", placing: 4 },
], points: 10 },
{ name: "Te-Awhi Te Angina",
achievements: [{ date: "20/07/19", tournament: "Ormond LC", cycle: "July", deck: "Pikachu & Zekrom-GX", placing: 2 },
], points: 12 },
{ name: "Hugh Masters",
achievements: [{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Beast Box", placing: 1 },
], points: 15 },
{ name: "Shang Chua",
achievements: [{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Baby Blacephalon", placing: 2 },
], points: 12 },
{ name: "Jeremy Evans",
achievements: [{ date: "14/07/19", tournament: "Maitland LC", cycle: "July", deck: "Malamar / Ultra Necrozma-GX", placing: 3 },
], points: 10 },
{ name: "Anton Piccio",
achievements: [{ date: "13/07/19", tournament: "Newcastle LC", cycle: "July", deck: "Ability Reshiram & Charizard-GX", placing: 1 },
], points: 15 },
{ name: "Harrison Hodges",
achievements: [{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Zapdos / Ultra Beasts", placing: 1 },
], points: 15 },
{ name: "Kyle Beaumont",
achievements: [{ date: "13/07/19", tournament: "Gold Coast LC", cycle: "July", deck: "Zapdos / Ultra Beasts", placing: 3 },
], points: 10 },
];

module.exports = players;