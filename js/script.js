
// Objet du bolide

var bolide = {
    bMarque: "Renault",
    bModele: "Golf",
    bMillesime: 1991,
    bCouleur: "green",
    bCarrosserie: "Berline 5 places",
    bPrix: 4500,
};

// DOM HTML

document.getElementById("prixBase").innerHTML = bolide.bPrix;

document.getElementById("millesime").innerHTML = bolide.bMillesime;

document.getElementById("forme").style.backgroundColor = bolide.bCouleur;

document.getElementById("forme").innerHTML = bolide.bMarque + " " + bolide.bCarrosserie;