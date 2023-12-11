//paramètres
let vitesseMs = 1000;
let pauseMs = 4000;

//variable initialisation
let setupImgs = document.querySelectorAll('#images img');
let imgCarrousel = document.createElement('img');
let start = true;

//initialisation
imgCarrousel.id = "imgCarrousel";
if(setupImgs.length==0){
    imgCarrousel.alt="Aucune image n'a été ajoutée au carrousel."
}
imgCarrousel.src = setupImgs[0].src;
imgCarrousel.className = "i-"+0

//event
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('#carrousel').appendChild(imgCarrousel);
    startCarrousel();
    this.style.display = "none"

    if(setupImgs.length>1){
        imgCarrousel.addEventListener("click", function(p){
            let idCarrousel = getIdCarrouselInt();
            if((window.innerWidth/2) < p.x){
                // next
                moveCarrousel();
                start=false;
            }
            else{
                // previous
                moveCarrousel(false);
                start=false;
            }
        })
        imgCarrousel.addEventListener("mouseleave", function(){ start=true; })
    }
})


//Functions
function startCarrousel(){
    setTimeout(function(){
        if(start){
            moveCarrousel();
        }
        startCarrousel();
    }, vitesseMs);
}
function moveCarrousel(sens = true){
    let idCarrousel = getIdCarrouselInt();
    if(sens){
        if(idCarrousel==setupImgs.length-1){
            imgCarrousel.className = "c-0";
            imgCarrousel.src = setupImgs[0].src;
        }
        else{
            imgCarrousel.className = "c-"+(++idCarrousel);
            imgCarrousel.src = setupImgs[idCarrousel].src;
        }
    }
    else{
        if(idCarrousel==0){
            imgCarrousel.className = "c-"+(setupImgs.length-1);
            imgCarrousel.src = setupImgs[setupImgs.length-1].src;
        }
        else{
            imgCarrousel.className = "c-"+(--idCarrousel);
            imgCarrousel.src = setupImgs[idCarrousel].src;
        }
    }
}
function getIdCarrouselInt(){
    return parseInt(imgCarrousel.className.split("-")[1]);
}