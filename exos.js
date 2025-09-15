/* Page 33 */
// Exo 1
let celcius = 20;
console.log(`En celcius : ${celcius}. En fahrenheit : ${celcius * 9/5 + 32}`);

// Exo 2
let longueur = 20;
let largeur = 15;
let aireTriangle = longueur * largeur;
console.log(aireTriangle);

// Exo 3
let prenom = "Brice";
let nom = "Ramette";
console.log(prenom + " " + nom);

// Exo 4
let prixHT = 20;
const TVA = 0.2;
console.log(`Montan HT : ${prixHT} Montant TVA : ${TVA} Montant TTC ${prixHT * (1+TVA)}`);

// Exo 5
console.log( ((4>=6) || ("herbe" != "verte")) && !(((12*2)==144)&& true) );

// Exo 6

let poids = 66;
let taille = 1.77;
let IMC = poids / (taille * taille);
console.log(Math.round(IMC).toFixed(2));

// Exo 7

const nbCommandesMini = 60;
let montantTotal = 20;
if(montantTotal >= nbCommandesMini) console.log("Livraison gratuite !");
else console.log("Frais de livraison : 6,99€");

// Exo 8
let binaire = "01101011";
console.log(`Nombre binaire : ${binaire} ; Decimal : ${parseInt(binaire, 2)}`);

/* Page 49 */

// Exo 1

const personne = {
    prenom: "Brice",
    nom: "Ramette",
    age: 20,
    ville: "Ifs"
};

console.log(personne.prenom);
console.log(personne.nom);
console.log(personne.age);
console.log(personne.ville);

// Exo 2
const personnes = [
    {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"},
];
console.log(personnes);
console.table(personnes);

// Exo 3
personnes.push({prenom: "Marc", nom: "Doe", age: 32, ville: "Marseille"});
console.log(personnes);
console.table(personnes);

// Exo4
personnes[0].prenom = "Jean";
personnes.splice(1, 1);
console.log(personnes);
console.table(personnes);