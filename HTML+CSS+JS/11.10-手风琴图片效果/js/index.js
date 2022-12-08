window.addEventListener('load', function(){
    let items = document.querySelectorAll('.item')

    function setActive(){
        items.forEach((item) => {
            // forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
            item.classList.remove('active')
        })
        this.classList.add('active')
    }

    items.forEach((item) => {
        item.addEventListener('click', setActive)
    })
})