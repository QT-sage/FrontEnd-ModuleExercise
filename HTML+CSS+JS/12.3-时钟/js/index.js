window.addEventListener('load',function(){
    var horas = document.querySelector("#horas")
    var minutos = document.querySelector("#minutos")
    var segundos = document.querySelector("#segundos")

    function padZero(n){
        if(n < 10){
            return '0' + n
        }
        else{
            return n
        }
    }

    var relogio = setInterval(function time(){
        // 方法一：给小于10的位置添加0
        let dateToday = new Date()
        let h = padZero(dateToday.getHours())
        let m = padZero(dateToday.getMinutes())
        let s = padZero(dateToday.getSeconds())

        // 方法二：给小于10的位置添加0,使用时，去掉上面的padZero函数，其他保留不变
        // if(h < 10) h = '0' + h
        // if(m < 10) m = '0' + m
        // if(s < 10) s = '0' + s

        horas.innerHTML = h
        minutos.innerHTML = m
        segundos.innerHTML = s
        
    })
})