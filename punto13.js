addEventListener(`DOMContentLoaded`,()=>{
    // #13En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
    // #ENTRADA DE DATOS
    let men=(prompt(`Dijite cual es su tipo de membresia A, B, C, D:`))
    let num1=Number(prompt(`dijite el precio del helado:`))
    // #proceso de datos
    if (men==`A`){
        let res=num1*0.10
        let res2=num1-res
      alert(`su valordel helado es de: ${res2}con el descuento de la membracia tipo A`)
    }else if (men==`B`){
        let res=num1*0.15
        let res2=num1-res
        alert(`su valordel helado es de: ${res2}con el descuento de la membracia tipo B`)
    }else if (men== `C`){
        let res=num1*0.20
        let res2=num1-res
        alert(`su valordel helado es de: ${res2}con el descuento de la membracia tipo C`)
    }else if (men==`D`){
        alert(` su valor del helado es de : ${num1}  sin nungun descuento`)
    }
})