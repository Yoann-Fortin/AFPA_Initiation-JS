// Les différents opérateurs en JS

// L'opérateur d'affectation, comme en Java est le =
const a = 1;
const b = 2;
const c = 2;
const d = "1";

// Opérateurs de comparaison

// Plus grand strictement
a > b // renverra false

// Plus grand ou égal
c >= b // renverra true

// Plus petit strictement
a < b // renverra true

// Plus petit ou égal
c <= b // renverra true

//Vérification simple
a == d // renverra true, c'est un peu surprenant mais Javascript modifie le type int en number pour comparer dans ce cas là.

// Vérification plus stricte
a === d // renverra false,on compare strictement la valeur et le type.

//La négation
a != d // renverra false
a !== d // renverra true

// Comme en Java, il existe encore d'autres sortes d'opérateurs