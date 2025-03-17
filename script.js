// Date despre deserturi
const desertData = {
    "lava-cake": {
        image: "poze/lavacake.jpg",
        title: "Lava Cake",
        description: "Un desert de ciocolată intens, servit cald, cu miez de ciocolată topită.",
        price: "25 Lei"
    },
    "cheesecake": {
        image: "poze/cheesecake.jpg",
        title: "Cheesecake cu fructe de sezon",
        description: "Cremă de brânză fină pe un blat crocant, cu topping de fructe proaspete.",
        price: "22 Lei"
    },
    "tiramisu": {
        image: "poze/tiramisu.jpg",
        title: "Tiramisu",
        description: "Clasicul desert italian cu mascarpone, cafea și cacao.",
        price: "20 Lei"
    },
    "inghetata": {
        image: "poze/inghetata asortata.jpg",
        title: "Înghețată Asortată",
        description: "O selecție răcoritoare de înghețată cremoasă în diverse arome delicioase.",
        price: "25 Lei"
    },
    "papanasi": {
        image: "poze/papanasi.jpg",
        title: "Papanași cu Gem de Afine",
        description: "Papanași pufoși, serviți cu smântână proaspătă și gem dulce-acrișor de afine.",
        price: "25 Lei"
    },
    "clatite": {
        image: "poze/clatite.jpg",
        title: "Clătite cu Ciocolată și Banane",
        description: "Clătite subțiri, umplute cu cremă de ciocolată și felii de banane proaspete.",
        price: "18 Lei"
    },
    "mousse-oreo": {
        image: "poze/mousse oreo.jpg",
        title: "Mousse Oreo",
        description: "Desert cremos și aerat, preparat cu biscuiți Oreo și un topping decadent de ciocolată.",
        price: "25 Lei"
    },
    "pavlova": {
        image: "poze/pavlova.jpg",
        title: "Pavlova",
        description: "O prăjitură delicată din bezea crocantă, cu cremă de frișcă și fructe proaspete.",
        price: "25 Lei"
    },
    "souffle-ciocolata": {
        image: "poze/souffle ciocolata.jpg",
        title: "Soufflé de Ciocolată",
        description: "Un desert rafinat, cu interior moale de ciocolată și crustă ușor crocantă.",
        price: "25 Lei"
    },
    "tarta-lamaie": {
        image: "poze/tarta cu lamaie.jpg",
        title: "Tartă de Lămâie",
        description: "O tartă revigorantă, cu umplutură de cremă de lămâie pe un blat fraged.",
        price: "25 Lei"
    },
    "brownie": {
        image: "poze/Brownie cu Nuci.jpg",
        title: "Brownie cu Nuci",
        description: "O prăjitură densă de ciocolată, presărată cu bucăți de nuci crocante.",
        price: "19 Lei"
    },
    "cupcake": {
        image: "poze/Cupcake cu Ciocolată și Zmeură.jpeg",
        title: "Cupcake cu Ciocolată și Zmeură",
        description: "Un cupcake pufos, cu cremă bogată de ciocolată și topping de zmeură proaspătă.",
        price: "18 Lei"
    },
    "mousse-ciocolata": {
        image: "poze/Mousse de Ciocolată.jpg",
        title: "Mousse de Ciocolată",
        description: "Un mousse delicat și aerat, cu aromă intensă de ciocolată.",
        price: "22 Lei"
    },
    "inghetata-mango": {
        image: "poze/Înghețată de Mango.jpg",
        title: "Înghețată de Mango",
        description: "Înghețată cremoasă, cu aromă intensă și exotică de mango.",
        price: "18 Lei"
    },
    "creme-brulee": {
        image: "poze/Creme Brûlée.jpg",
        title: "Creme Brûlée",
        description: "Un desert sofisticat, cu cremă de vanilie și crustă caramelizată crocantă.",
        price: "24 Lei"
    },
    "red-velvet": {
        image: "poze/Tort Red Velvet.jpg",
        title: "Tort Red Velvet",
        description: "Un tort catifelat, cu straturi roșii și cremă fină de brânză dulce.",
        price: "28 Lei"
    },
    "tarta-fructe": {
        image: "poze/Tartă cu Fructe de Pădure.jpg",
        title: "Tartă cu Fructe de Pădure",
        description: "O tartă fragedă, decorată cu fructe de pădure proaspete și strălucitoare.",
        price: "23 Lei"
    },
    "panna-cotta": {
        image: "poze/Panna Cotta.jpg",
        title: "Panna Cotta cu Fructe",
        description: "Un desert italian clasic, cu sos proaspăt de fructe la alegere.",
        price: "25 Lei"
    },
    "tarta-mere": {
        image: "poze/Tartă cu Mere Caramelizate.jpg",
        title: "Tartă cu Mere Caramelizate",
        description: "Mere caramelizate pe un blat crocant, acompaniate de scorțișoară.",
        price: "22 Lei"
    },
    "ecler": {
        image: "poze/Ecler cu Cremă de Vanilie.jpg",
        title: "Ecler cu Cremă de Vanilie",
        description: "Un ecler pufos, umplut cu cremă de vanilie fină și glazură de ciocolată.",
        price: "17 Lei"
    },
    "cozonac": {
        image: "poze/Cozonac cu Nuci.jpg",
        title: "Cozonac cu Nuci și Vanilie",
        description: "Cozonac tradițional românesc, cu umplutură de nuci aromate și vanilie.",
        price: "30 Lei"
    },
    "macarons": {
        image: "poze/Macarons Asortate.jpg",
        title: "Macarons Asortate",
        description: "Delicate și colorate, macarons cu diverse arome și textură crocantă.",
        price: "20 Lei"
    },
    "cupcake": {
        image: "poze/Cupcake cu Ciocolată și Zmeură.jpeg",
        title: "Cupcake cu Ciocolată și Zmeură",
        description: "Un cupcake pufos, cu cremă bogată de ciocolată și topping de zmeură proaspătă.",
        price: "18 Lei"
    }
};


// Funcția pentru a afișa detaliile desertului
function showDetails(desertId) {
    const desert = desertData[desertId];
    document.getElementById("popup-image").src = desert.image;
    document.getElementById("popup-title").textContent = desert.title;
    document.getElementById("popup-description").textContent = desert.description;
    document.getElementById("popup-price").textContent = desert.price;
    
    document.getElementById("desert-details").style.display = "flex";
}

// Funcția pentru a închide popup-ul
function closePopup() {
    document.getElementById("desert-details").style.display = "none";
}
