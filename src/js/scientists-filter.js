const scientists = [
{
name: "Albert",
surname: "Einstein",
born: 1879,
dead: 1955,
id: 1
},
{
name: "Isaac",
surname: "Newton",
born: 1643,
dead: 1727,
id: 2
},
{
name: "Galileo",
surname: "Galilei",
born: 1564,
dead: 1642,
id: 3
},
{
name: "Marie",
surname: "Curie",
born: 1867,
dead: 1934,
id: 4
},
{
name: "Johannes",
surname: "Kepler",
born: 1571,
dead: 1630,
id: 5
},
{
name: "Nicolaus",
surname: "Copernicus",
born: 1473,
dead: 1543,
id: 6
},
{
name: "Max",
surname: "Planck",
born: 1858,
dead: 1947,
id: 7
},
{
name: "Katherine",
surname: "Blodgett",
born: 1898,
dead: 1979,
id: 8
},
{
name: "Ada",
surname: "Lovelace",
born: 1815,
dead: 1852,
id: 9
},
{
name: "Sarah E.",
surname: "Goode",
born: 1855,
dead: 1905,
id: 10
},
{
name: "Lise",
surname: "Meitner",
born: 1878,
dead: 1968,
id: 11
},
{
name: "Hanna",
surname: "Hammarström",
born: 1829,
dead: 1909,
id: 12
}
];


const body = document.body;
const scientistsBlocks = document.getElementById("scientists");
const scientistsBlocksButtons = scientistsBlocks.querySelectorAll("button");
scientistsBlocksButtons.forEach((btn, i) => {
    const fullInfo = scientists[i]["name"] + " " + scientists[i]["surname"] + "\n(" + scientists[i]["born"] + " - " + scientists[i]["dead"] + ")";
    btn.textContent = fullInfo;
});

const sBorn19 = document.getElementById("s-born-19");
sBorn19.addEventListener("click", () => {
    const sortedScientists = [...scientists].sort((a, b) => b.born - a.born);
    sortedScientists.forEach((sc, i) => {
        if (sc.born >= 1800) {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")"
        } else {
            scientistsBlocksButtons[i].textContent = ""
        }
    })
});

const albertBorn = document.getElementById("albert-born");
albertBorn.addEventListener("click", () => {
    const index = scientists.findIndex(sc => sc.name === "Albert");
    scientistsBlocksButtons.forEach((btn, i) => {
        if (i === index) {
            btn.textContent = scientists[index].name + " " + scientists[index].surname + "\nBorn: " + scientists[index].born
        } else {
            btn.textContent = ""
        }
    });
});

const abcBtn = document.getElementById("abc");
abcBtn.addEventListener("click", () => {
    const sortedScientists = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
    sortedScientists.forEach((sc, i) => {
        scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")"
    });
});

const surnameC = document.getElementById("surname-c");
surnameC.addEventListener("click", () => {
    const sortedScientists = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
    sortedScientists.forEach((sc, i) => {
        if (sc.surname.includes("C")) {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")"
        } else {
            scientistsBlocksButtons[i].textContent = ""
        }
    });
});

const longerLive = document.getElementById("longer-live");
longerLive.addEventListener("click", () => {
    const sortedScientists = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    sortedScientists.forEach((sc, i) => {
        let age = sc.dead - sc.born
        scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + "Lived:" + age + ")"
    });
});

const nameA = document.getElementById("name-a");
nameA.addEventListener("click", () => {
    const sortedScientists = [...scientists].sort((a, b) => a.name - b.name)
    sortedScientists.forEach((sc, i) => {
        if (sc.name.includes("A")) {
            scientistsBlocksButtons[i].textContent = "";
        } else {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")";
        }
    });
});

const youngerBtn = document.getElementById("younger");
youngerBtn.addEventListener("click", () => {
    const maxBorn = Math.max(...scientists.map(sc => sc.born));
    const index = scientists.findIndex(sc => sc.born === maxBorn);
    const scientistsCopy = [...scientists];
    scientistsCopy.forEach((sc, i) => {
        if (i === index) {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")";
        } else {
            scientistsBlocksButtons[i].textContent = "";
        }
    });
});

const older = document.getElementById("older");
older.addEventListener("click", () => {
    const youngerSortScientists = [...scientists].sort((a,b) => (a.dead - a.born) - (b.dead - b.born));
    const olderSortScientists = [...scientists].sort((a,b) => (b.dead - b.born) - (a.dead - a.born));
    const youngerIndex = scientists.findIndex(sc => sc.born === youngerSortScientists[0].born);
    const olderIndex = scientists.findIndex(sc => sc.born === olderSortScientists[0].born);
    const scientistsCopy = [...scientists];
    scientistsCopy.forEach((sc, i) => {
        if (i === youngerIndex) {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")";
        } else if (i === olderIndex) {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")";
        } else {
            scientistsBlocksButtons[i].textContent = "";
        }
    });
});

const aABtn = document.getElementById("a-a");
aABtn.addEventListener("click", () => {
    const sortedScientists = [...scientists].sort((a,b) => a.name - b.name);
    sortedScientists.forEach((sc, i) => {
        const n = sc.name.charAt()
        const s = sc.surname.charAt()
        if (n === s) {
            scientistsBlocksButtons[i].textContent = sc.name + " " + sc.surname + " (" + sc.born + " - " + sc.dead + ")";
        } else {
            scientistsBlocksButtons[i].textContent = "";
        }
    });
});