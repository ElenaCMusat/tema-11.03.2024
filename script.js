
    

// // Ex 1) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. 
// // Daca numărul de produse este peste 5 ( inclusiv ) afișează în consola “Ai transport gratuit”.

// let produseDinCos = 20;

// if (produseDinCos.length > 8){
//     console.log("Ai transport gratuit");
// }

// console.log("Ai transport gratuit");

// // Ex 2) Sa se creeze o variabila reprezentand parola userului curent 
// // (ca valoarea a variabilei puneti orice string, ex: "pisicutsa123"). Apoi sa se afiseze
// //  in consola "Lungimea parolei este de X caractere"

// let userPassword = "pisicuta123";
// console.log(`Lungimea parolei este de ${userPassword.length} caractere`);

// // Ex 3) Daca lungimea parolei este mai mare decat 8 sa se afiseze in consola "Puternica",
// //  altfel sa afiseze in consola "Slaba"


// if (userPassword.length > 8){
//     console.log("Parola este puternica");
// } else {
//     console.log("Parola este slaba");
// }

// // Ex 4) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos.
// //  Daca numărul de produse este peste 5 afișează în consola “Ai transport gratuit”, altfel sa se
// //   afișeze “Mai adauga X produse ca sa ai transport gratuit”. X reprezintă diferența pana la 5.

// let cosProduse = 2;
// if (cosProduse >= 5) {
//     console.log("Ai transport gratuit");
// } else {
//     console.log(`Mai adauga ${5 - cosProduse} produse ca sa ai transport gratuit`)
// };

// // Ex 5) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), 
// // iar functia sa returneze valorea parametrului plus 10

// let parametru = 50;

// let calculeazaParametruPlus10 = (parametru) => {
//     return parametru + 10;
// };

// console.log(calculeazaParametruPlus10 (parametru));

// // Ex 6) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), 
// // iar functia sa returneze valorea parametrului inmultita cu 3

// let a = 100;

// let multipluDeTrei = (produs) => {
//     return produs * 3;
// };
// console.log(multipluDeTrei(a));

// // Ex 7) Sa se creeze o funcție care primește doi parametrii ( știm ca amandoi de tip number ),
// //  iar functia sa returneze diferenta lor

// let numarulUnu = 200;
// let numarulDoi  = 10;

// let calculeazaDiferentaDintre = (parametruUnu, parametruDoi) => {
//     let diferenta = parametruUnu - parametruDoi;
//     return diferenta;
// };

// console.log(calculeazaDiferentaDintre(numarulUnu, numarulDoi));


// // Ex 8) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), 
// // iar functia sa returneze true dacă valoarea parametrului este mai mai mare decât 5, iar în caz
// //  contrar sa returneze false.

// let distanta = 15;
// let esteMaiMare = (x) => {

// if (x > 5) { 

//     return true;

// }else { return false};

// };

// console.log(esteMaiMare(distanta));


// Ex 9) Sa se creeze o funcție care primește doi parametrii ( știm ca amandoi sunt de tip number ),
//  iar functia sa returneze true dacă suma celor doi este mai mai mare decât 10, iar în caz contrar sa
//  returneze false.

// let numarUnu = 10;
// let numarDoi = 8;
// let sum = 0;

// let esteMaiMare = (x1, x2) => {

//     let suma = numarUnu + numarDoi;

//     if (suma > 10) { return true;
//     }else {
//          return false};

//     };

// console.log(esteMaiMare(numarUnu, numarDoi));


// Ex 10) Sa se creeze o funcție care primește un parametru ( știm ca e de tip string ). 
// Funcția sa returneze lungimea lui. De exemplu, dacă apelam funcția cu parametrul “Hello”,
//  functia sa returneze 5

// let masoaraLungimea = (lungimeParametru) => {

//     let lungime = lungimeParametru.length;

//     return lungime;
// };

// let salut = "Hello";

// console.log(masoaraLungimea(salut));

// let numaraCaracterele = "Oare cate caractere am folosit aici?";

// console.log(masoaraLungimea(numaraCaracterele));

