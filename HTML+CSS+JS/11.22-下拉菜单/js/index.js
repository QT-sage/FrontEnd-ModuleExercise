window.addEventListener("load", function(){
    // const dropdowns = document.querySelectorAll(".dropdown")

    // dropdowns.forEach(dropdown => {
    //     const select = dropdown.querySelector(".select")
    //     const caret = dropdown.querySelector(".caret")
    //     const menu = dropdown.querySelectorAll(".menu")
    //     const options = dropdown.querySelector(".menu li")
    //     const selected = dropdown.querySelector(".selected")

    //     select.addEventListener("click", () => {
    //         select.classList.toggle("select-clicked")
    //         caret.classList.toggle("caret-rotate")
    //         menu.classList.toggle("menu-open")
    //     })

    //     options.forEach(option => {
    //         option.addEventListener("click", () => {
    //             selected.innerText = option.innerText
    //             select.classList.remove("select-clicked")
    //             caret.classList.remove("caret-rotate")
    //             menu.classList.remove("menu-open")
    //             options.forEach(option => {
    //                 option.classList.remove("active")
    //             })
    //             option.classList.add("active")
    //         })
    //     })
    // })


    var select = document.querySelector(".select")
    var selected = document.querySelector(".selected")
    var caret = document.querySelector(".caret")
    var menu = document.querySelector(".menu")
    var lis = document.querySelectorAll(".menu li")

    select.addEventListener("click", function(){
        select.className = "select select-clicked"
        caret.className = "caret caret-rotate"
        // menu.className = "menu menu-open"
        menu.style.display = "block"
        console.log(lis.length)
        console.log(lis)
    })

    for(var i = 0; i < lis.length; i++){
        lis[i].addEventListener("click", function(){
            selected.innerHTML = this.innerHTML
            for(var i = 0; i < lis.length; i++){
                lis[i].className = ""
            }
            this.className = "active"
            select.className = "select"
            caret.className = "caret"
            menu.style.display = "none"
            
        })
    }
    
})