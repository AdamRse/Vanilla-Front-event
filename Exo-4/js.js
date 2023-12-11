document.querySelectorAll("#conteneur div").forEach(c => {
    c.addEventListener("mousedown", function(){
        this.classList.remove("caseLt")
        this.classList.add("caseBg")
    })
    c.addEventListener("mouseup", function(){
        this.classList.add("caseLt")
        this.classList.remove("caseBg")
    })
    c.addEventListener("mouseleave", function(){
        this.classList.add("caseLt")
        this.classList.remove("caseBg")
    })
});