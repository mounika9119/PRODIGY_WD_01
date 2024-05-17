document.addEventListener("DOMContentLoaded", function(){
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function(){
        if (this.window.scrollY > 30){
            navbar.classList.add("scrolled");
        }
        else{
            navbar.classList.remove("scrolled");
        }
    });
});