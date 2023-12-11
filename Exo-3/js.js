let touche1 = false;
document.body.addEventListener("keypress", function(k){
    if(touche1 == "KeyG"){
        if(k.code == "KeyH"){
            document.querySelector("#msg").classList.remove("hidden")
        }
    }
    else{
        touche1 = k.code;
        document.querySelector("#msg").classList.add("hidden")
    }
    console.log(k)
})
document.body.addEventListener("keyup", function(k){
    touche1 = false;
})