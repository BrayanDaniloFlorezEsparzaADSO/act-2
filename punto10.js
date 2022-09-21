addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /
    let prod1=Number(prompt(`coloque el valor del producto:`))
    let prod2=Number(prompt(`coloque el valor del producto:`))
    let prod3=Number(prompt(`coloque el valor del producto:`))
    let prod4=Number(prompt(`coloque el valor del producto:`))
    let prod5=Number(prompt(`coloque el valor del producto:`))
    
    // #PROCESOS U OPERACIONES
    let tol=(prod1+prod2+prod3+prod4+prod5)
    let iva=Number(prompt(`coloque el valor del iva:`))
    let vaiva=tol*iva
    let res=tol+vaiva
    // #salida o entrada de resultado
    alert(`valor del producto con el iva: ${res}` )
    alert(`el sub valor es de : ${tol}`)
    alert(`valor del iva: ${vaiva}` ) 
})