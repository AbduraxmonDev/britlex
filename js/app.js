document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
    
})

document.addEventListener('keydown', function(e){
    if (e.key == 'Escape') {
        document.querySelector("header").classList.remove("open")
    }
}) ;

document.getElementById("link").addEventListener("click", function() {
    document.querySelector("header").classList.remove("open")
})