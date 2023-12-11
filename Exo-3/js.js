let divTexte = document.querySelector("#txt")
document.querySelector("button").addEventListener("click", function(e){
    divTexte.classList.toggle("hidden")
    document.body.classList.toggle("gris")
    e.stopPropagation();
})
divTexte.addEventListener("click", function(e){
    e.stopPropagation();
})
document.body.addEventListener('click', function(){
    divTexte.classList.add("hidden")
    document.body.classList.remove("gris")
})

function fctToggle(){
    
}