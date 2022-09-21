addEventListener(`DOMContentLoaded`,()=>{
    // #Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los$130.000 el descuento será del 15%, de lo contrario no hay descuento.
    // #ENTRADA DE DATOS
    let pago1=Number(prompt("dijite el valor total a pagar"))
    let desc=0.15
    // #proceso
    if (pago1 >=130000){
        let res1=pago1*desc
        let res2=pago1-res1
        alert(`su valor total con el 15% de descuento es de: ${res2}`)
    }else{
        alert(`no tiene el 15% de descuento ya que no cumplio con la cuota del restaurante`)
        alert(`el valor a pagar es de: ${pago1}`)
    }
      
      
    
    
})