let setupImgs = document.querySelectorAll('#images img');
let imgCarrousel = document.createElement('img');
imgCarrousel.id = "imgCarrousel";
if(setupImgs.length==0){
    imgCarrousel.alt="Aucune image n'a été ajoutée au carrousel."
}
imgCarrousel.src = setupImgs[0].src;
imgCarrousel.className = "i-"+0



document.querySelector('button').addEventListener('click', function(){
    document.querySelector('#carrousel').appendChild(imgCarrousel);

    if(setupImgs.length>1){
        imgCarrousel.addEventListener("click", function(p){
            if((window.innerWidth/2) > p.x){
                // next
                let idCarrousel = getIdCarrouselInt();
                if(idCarrousel=setupImgs.length-1){
                    imgCarrousel.className = "c-0";
                    imgCarrousel.src = setupImgs[0].src;
                }
                else{
                    imgCarrousel.className = "c-"+(++idCarrousel);
                    imgCarrousel.src = setupImgs[idCarrousel].src;
                }
            }
            else{
                //previous
                if(idCarrousel==0){
                    imgCarrousel.className = "c-"+setupImgs.length-1;
                    imgCarrousel.src = setupImgs[setupImgs.length-1].src;
                }
                else{
                    imgCarrousel.className = "c-"+(--idCarrousel);
                    imgCarrousel.src = setupImgs[idCarrousel].src;
                }
            }
        })
    }
})


function getIdCarrouselInt(){
    return parseInt(imgCarrousel.className.split("-")[1]);
}