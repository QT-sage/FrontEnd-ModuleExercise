window.addEventListener('load', function(){
    var nacigation = document.querySelector(".nacigation")
    var close = document.querySelector(".close")

    nacigation.addEventListener("click", function(){
        nacigation.classList.add("active")
    })

    close.addEventListener("click", function(){
        nacigation.classList.remove("active")
    })
})