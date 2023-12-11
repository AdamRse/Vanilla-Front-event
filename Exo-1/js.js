const couleurs = ["bg-primary", "bg-secondary", "bg-success", "bg-1", "bg-2", "bg-3", "bg-warning", "bg-info", "bg-light"];
let cases = document.querySelectorAll("#cadrillage div");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getBgColor(div){
    let bgC = false;
    let classes = div.className.split(" ");
    couleurs.forEach(function(co){
        classes.forEach(function(cl){
            if(co == cl) bgC = co;
        })
    })
    return bgC
}
function tabEnleverUneCouleur(couleurAenlever, tabCouleur = false){
    let cretour = [];
    let couleurDef = (tabCouleur)?tabCouleur:couleurs;
    couleurDef.forEach(function(v){
        //console.log(v, couleurAenlever, v!=couleurAenlever);
        if(v!=couleurAenlever){

            cretour.push(v);
        }
    })
    //console.log(cretour)
    return cretour;
}

function assignerCouleurRandom(div){
    let id = parseInt(div.id.split("c")[1]);
    let couleurRange = tabEnleverUneCouleur(getBgColor(div));
    let cases = document.querySelectorAll("#cadrillage div");
    if(id == 1){
        couleurRange = tabEnleverUneCouleur(getBgColor(document.querySelector("#c2")), couleurRange)
    }
    else if(id == cases.length){
        couleurRange = tabEnleverUneCouleur(getBgColor(document.querySelector("#c"+(id-1))), couleurRange)
    }
    else{
        couleurRange = tabEnleverUneCouleur(getBgColor(document.querySelector("#c"+(id-1))), couleurRange)
        couleurRange = tabEnleverUneCouleur(getBgColor(document.querySelector("#c"+(id+1))), couleurRange)
    }
    div.classList.remove(getBgColor(div));
    let newCl = couleurRange[getRandomInt(couleurRange.length-1)];
    div.classList.add(newCl)
}

cases.forEach(function(c){
    assignerCouleurRandom(c);
    c.addEventListener("click", function(){
        assignerCouleurRandom(this);
    })
})