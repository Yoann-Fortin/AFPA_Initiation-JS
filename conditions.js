// La première des conditions est l'habituel if else,

if (a > 0) {
    console.log("Positif");
} else if (a < 0) {
    console.log("Negatif");
} else {
    console.log("Neutre");
}

// il est possible aussi d'utiliser des ternaires
console.log((string == 'Toto') ? true : false);

// Il existe aussi le Switch
switch (work) {
    case 1:
        console.log("Directeur");
        break;
    case 2:
        console.log('Vendeur');
        break;
    default:
        console.log("Ouvrier");
}

// Attention, dans une expression conditionnelle plusieurs valeurs valent false:
// - false bien entendu
// - mais aussi 0
// - également le null
// - et enfin le undefined