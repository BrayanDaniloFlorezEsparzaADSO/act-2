addEventListener(`DOMContentLoaded`,()=>{
    // #8En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
    // #ENTRADA DE DATOS
    trabajador=(prompt("dijite la (p) si es trabajador de planta, dijite la (a) si es trabajador administrativo:"))
    // #proceso
    if (trabajador== "p"){
        let horas=Number(prompt("dijte cunatas horas a trabajado en el dia laboral:"))
        let res=horas*20000
        alert(`total de horas trabajadas ${horas}`)
        alert(`su pado es de :${res} `)
    }else if (trabajador =="a"){
        let horas=Number(prompt(`dijte cunatas horas a trabajado en el dia laboral:`))
        let res=horas*10000
        alert(`total de horas trabajadas: ${horas}`)
        alert(`su pado es de :$ ${res}`)
    }
      
    
    
})
    
      