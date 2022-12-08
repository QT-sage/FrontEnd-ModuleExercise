window.addEventListener("load", function(){
    var marker = document.querySelector(".marker")
    var lis = document.querySelectorAll("ul li")

    // function moveIndicator(e){
    //     marker.style.left = e.offsetLeft + "px"
    //     marker.style.width = e.offsetWidth + "px"
    // }

    // lis.forEach(link => {
    //     link.addEventListener("mousemove", (e) => {
    //         moveIndicator(e.target)
    //     })
    // })

    // function activeLink(){
    //     lis.forEach((item) => 
    //     item.classList.remove("active"))
    //     this.classList.add("active")
    // }

    // lis.forEach((item) =>
    // item.addEventListener("movseover", activeLink))

    for(var i = 0; i < lis.length; i++){
        lis[i].addEventListener("mouseover", function(){
            marker.style.left = this.offsetLeft + 25 + "px"
        })
    }
    


})